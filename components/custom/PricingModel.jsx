import Lookup from '@/data/Lookup';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { UserDetailContext } from '@/context/UserDetailContext';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { toast } from 'sonner';
import { Loader2Icon, CreditCard, Star, Zap, Crown, Infinity } from 'lucide-react';

function PricingModel() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [selectedOption, setSelectedOption] = useState();
  const [loading, setLoading] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const UpdateToken = useMutation(api.users.UpdateToken);

  useEffect(() => {
    console.log(userDetail);
  }, [userDetail]);

  const handlePayment = async (pricing) => {
    if (!stripe || !elements || !userDetail) {
      toast.error('Payment system not ready or user not authenticated');
      return;
    }

    setLoading(true);
    setSelectedOption(pricing);

    try {
      // Create payment intent on the server
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: pricing.price * 100, // Convert to cents
          currency: 'usd',
          metadata: {
            userId: userDetail._id,
            tokens: pricing.value,
            planName: pricing.name,
          },
        }),
      });

      const { clientSecret } = await response.json();

      // Confirm payment with Stripe
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: userDetail.name,
            email: userDetail.email,
          },
        },
      });

      if (error) {
        toast.error(`Payment failed: ${error.message}`);
      } else if (paymentIntent.status === 'succeeded') {
        // Update tokens in database
        const newTokenCount = Number(userDetail?.token) + Number(pricing.value);
        await UpdateToken({
          token: newTokenCount,
          userId: userDetail._id,
        });

        setUserDetail(prev => ({ ...prev, token: newTokenCount }));
        toast.success(`Payment successful! ${pricing.tokens} tokens added to your account.`);
        setShowPaymentForm(false);
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Payment processing failed. Please try again.');
    } finally {
      setLoading(false);
      setSelectedOption(null);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#1f2937',
        '::placeholder': {
          color: '#6b7280',
        },
        backgroundColor: 'transparent',
      },
      invalid: {
        color: '#ef4444',
      },
    },
    hidePostalCode: true,
  };

  return (
    <div className="mt-10">
      {!showPaymentForm ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Lookup.PRICING_OPTIONS.map((pricing, index) => (
            <div
              className={`relative bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-105 ${
                index === 2 ? 'ring-2 ring-blue-500 scale-105' : 'border border-gray-200'
              }`}
              key={index}
            >
              {/* Popular Badge */}
              {index === 2 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Plan Icon */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  index === 0 ? 'bg-green-100 text-green-600' :
                  index === 1 ? 'bg-blue-100 text-blue-600' :
                  index === 2 ? 'bg-purple-100 text-purple-600' :
                  'bg-yellow-100 text-yellow-600'
                }`}>
                  {index === 0 && <Zap className="w-8 h-8" />}
                  {index === 1 && <Star className="w-8 h-8" />}
                  {index === 2 && <Crown className="w-8 h-8" />}
                  {index === 3 && <Infinity className="w-8 h-8" />}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pricing.name}</h3>
              </div>
              
              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">${pricing.price}</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <p className="text-lg font-medium text-gray-600 mt-2">{pricing.tokens} Tokens</p>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-center mb-8 min-h-[3rem]">{pricing.desc}</p>
              
              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  AI Code Generation
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Live Preview & Export
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  {index >= 1 ? 'Priority Support' : 'Community Support'}
                </div>
                {index >= 2 && (
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Advanced Features
                  </div>
                )}
                {index === 3 && (
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Unlimited Everything
                  </div>
                )}
              </div>
              
              {/* CTA Button */}
              {userDetail && (
                <Button
                  onClick={() => {
                    setSelectedOption(pricing);
                    setShowPaymentForm(true);
                  }}
                  disabled={loading}
                  className={`w-full py-3 font-semibold transition-all duration-200 ${
                    index === 2 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  {index === 0 ? 'Get Started' : `Upgrade to ${pricing.name}`}
                </Button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Complete Payment
            </h3>
            <div className="text-gray-600">
              <p className="text-lg">{selectedOption?.name} Plan</p>
              <p className="text-sm text-gray-500">{selectedOption?.tokens} Tokens</p>
              <p className="text-2xl font-bold text-blue-600 mt-2">
                ${selectedOption?.price}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Details
            </label>
            <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
              <CardElement options={cardElementOptions} />
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={() => setShowPaymentForm(false)}
              variant="outline"
              className="flex-1"
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              onClick={() => handlePayment(selectedOption)}
              disabled={loading || !stripe || !elements}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              {loading ? (
                <>
                  <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pay ${selectedOption?.price}
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PricingModel;