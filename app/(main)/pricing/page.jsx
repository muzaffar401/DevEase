'use client';
import PricingModel from '@/components/custom/PricingModel';
import { UserDetailContext } from '@/context/UserDetailContext';
import Lookup from '@/data/Lookup';
import React, { useContext } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function Pricing() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {Lookup.PRICING_DESC}
          </p>
          
          {/* Token Status Card */}
          {userDetail && (
            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto mb-12 border border-blue-100">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {userDetail?.token?.toLocaleString() || 0}
                  </h3>
                  <p className="text-gray-600">Tokens Remaining</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Need more tokens?</p>
                  <p className="text-sm font-medium text-blue-600">Upgrade below</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Features Comparison */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Core Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  AI Code Generation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Live Preview
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Export Projects
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Frameworks</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  React
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Tailwind CSS
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  JavaScript/TypeScript
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Deployment</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  One-Click Deploy
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Custom Domains
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  SSL Certificates
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Support</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  24/7 Chat Support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Documentation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Community Access
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <PricingModel />
        
        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-2">What are tokens?</h3>
              <p className="text-gray-600 text-sm">
                Tokens are used to measure AI usage. Each request to generate code consumes tokens based on complexity.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Can I upgrade anytime?</h3>
              <p className="text-gray-600 text-sm">
                Yes! You can upgrade your plan at any time and unused tokens roll over to your new plan.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Do tokens expire?</h3>
              <p className="text-gray-600 text-sm">
                Tokens don't expire as long as your subscription is active. They carry over month to month.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600 text-sm">
                We accept all major credit cards through Stripe's secure payment processing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;