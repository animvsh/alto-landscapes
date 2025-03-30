
import React from 'react';

const AduGuideSection = () => {
  return (
    <div className="bg-gray-50 rounded-xl p-8 mb-8">
      <div className="text-center mb-12">
        <h2 className="section-title">ADU Guide for Los Angeles & Ventura County</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 text-alto-dark-gray">
          <p className="flex items-center"><span className="font-semibold mr-2">Contact:</span> 818-807-7587</p>
          <p className="flex items-center"><span className="font-semibold mr-2">Email:</span> info@altobuilds.com</p>
        </div>
        <p className="mt-2 text-alto-dark-gray">
          <span className="font-semibold">Head Office:</span> 328 S La Brea Ave, Los Angeles, CA 90038
        </p>
      </div>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-alto-blue mb-4 flex items-center">
          <span className="bg-alto-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
          What is an ADU?
        </h3>
        <p className="mb-4">
          An <strong>Accessory Dwelling Unit (ADU)</strong> is a secondary housing unit built on a property zoned for residential use. These units can be:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li><strong>Detached:</strong> Stand-alone structure</li>
          <li><strong>Attached:</strong> Built onto the main home</li>
          <li><strong>Conversion:</strong> Repurposed from an existing structure (like a garage)</li>
        </ul>
        <p className="mb-3"><strong>Other common names:</strong> Granny flat, in-law suite, guest house, backyard cottage, or casita.</p>
        
        <p className="mb-3"><strong>Features:</strong></p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Full kitchen</li>
          <li>Bathroom</li>
          <li>Private entrance</li>
        </ul>
        
        <p className="mb-3"><strong>Use Cases:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Housing for family members</li>
          <li>Rental income</li>
          <li>Guest space</li>
          <li>Home office or studio</li>
        </ul>
      </div>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-alto-blue mb-4 flex items-center">
          <span className="bg-alto-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
          How Many ADUs Can You Build?
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Single-family properties:</strong> 1 ADU + 1 Junior ADU (JADU)</li>
          <li><strong>Multifamily properties:</strong> 1 ADU per unit (up to <strong>8 units starting 2025</strong>, per SB 1211)</li>
          <li>Garage/storage conversions allowed</li>
          <li><strong>Los Angeles:</strong> Offers an ADU Bonus Program for more expansion</li>
        </ul>
      </div>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-alto-blue mb-4 flex items-center">
          <span className="bg-alto-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">3</span>
          ADU Types
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Detached:</strong> Separate structure</li>
          <li><strong>Attached:</strong> Built as an addition to the main home</li>
          <li><strong>Conversion:</strong> Garage or other space turned into living quarters</li>
        </ul>
        <p>Each city has unique zoning/setback rules. Always <strong>check local regulations</strong>.</p>
      </div>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-alto-blue mb-4 flex items-center">
          <span className="bg-alto-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">4</span>
          Key California ADU Laws
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Lot size:</strong> No minimum</li>
          <li><strong>Setbacks:</strong> 4 feet (side and rear)</li>
          <li><strong>Size minimums:</strong> 850 sq. ft. (1-bedroom), 1,000 sq. ft. (2-bedroom), 800 sq. ft. must be allowed <em>by right</em></li>
          <li><strong>Owner-occupancy:</strong> Not required</li>
          <li><strong>Parking:</strong> Not required if within ½ mile of public transit or car share</li>
          <li><strong>HOAs/CC&Rs:</strong> Cannot impose unreasonable restrictions</li>
          <li><strong>Permit Review Time:</strong> Building departments must respond within 60 days</li>
        </ul>
      </div>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-alto-blue mb-4 flex items-center">
          <span className="bg-alto-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">5</span>
          ADU Costs
        </h3>
        
        <div className="mb-4">
          <h4 className="font-semibold mb-2">General Range:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>$350–$500+ per sq. ft.</strong> for turn-key detached ADUs (500–1,200 sq. ft.)</li>
            <li>80–85% of cost = vertical construction (structure + standard finishes)</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Additional Costs:</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b text-left">Cost Component</th>
                  <th className="py-2 px-4 border-b text-left">Estimate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">ADU Feasibility Study</td>
                  <td className="py-2 px-4 border-b">$7,500</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">Construction Drawings</td>
                  <td className="py-2 px-4 border-b">$7,500+</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Permits & City Fees</td>
                  <td className="py-2 px-4 border-b">$5,000+</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">Site Work</td>
                  <td className="py-2 px-4 border-b">~$25,000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Utility Upgrades</td>
                  <td className="py-2 px-4 border-b">$30,000–$50,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded mb-6">
          <p className="text-sm">
            <strong>Rising Costs Note:</strong> The California Construction Cost Index increased <strong>37% from 2021 to 2024</strong>. A $300K ADU in 2021 may now cost ~$410K in 2024.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Why Are ADUs So Expensive per Sq. Ft.?</h4>
          <p className="mb-2">Even small ADUs require:</p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Full kitchen, bath, and laundry (the most expensive areas)</li>
            <li>Design and permitting documents</li>
            <li>General conditions (dumpsters, site toilets, management)</li>
            <li>Vendor base fees (same setup costs regardless of scale)</li>
          </ul>
          <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
            <p className="text-sm">
              ADUs carry many of the same <strong>fixed costs</strong> as larger homes, spread across less square footage.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-alto-blue mb-4 flex items-center">
          <span className="bg-alto-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">6</span>
          ADU Financing Options
        </h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-1">1. Home Equity Loan / HELOC</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Based on existing equity (LTV 80–90%)</li>
              <li>Draw as needed, pay interest only on what's used</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-1">2. Fixed Rate Second Position Loan</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Based on <strong>after-renovation home value</strong></li>
              <li>Keeps current mortgage</li>
              <li>Full loan given upfront</li>
              <li>Term: Up to 20 years</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-1">3. Construction Loan</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ideal if equity is low</li>
              <li>Covers build, converts to ARM after completion</li>
              <li>Payments are interest-only during construction</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-1">4. Portfolio Lending (Bridge Loan)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Great for investors</li>
              <li>Not based on equity</li>
              <li>Short-term funding strategy with plan to refinance later</li>
            </ul>
            
            <div className="mt-2 pl-6">
              <p className="font-medium mb-1">Loan Terms:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Max Loan-to-Cost: 80%</li>
                <li>Term: 12 months (+ optional 3-month extension)</li>
                <li>Origination Fee: 2% (minimum $10K)</li>
                <li>Permits required before funding</li>
                <li>Personal guaranty & FICO 720+</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-1">5. Renovation Loans (203K, Homestyle)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Include ADU costs in primary mortgage</li>
              <li>Based on future property value</li>
              <li>Up to 95% LTV for primary residence</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-1">6. Cash-Out Refinance</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Replace existing mortgage with a larger one</li>
              <li>Use cash difference for ADU project</li>
              <li>LTV: 80–90%</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-1">7. HECM (Reverse Mortgage)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>For homeowners <strong>62+</strong></li>
              <li>Tap into home equity as line of credit (42–70% based on age)</li>
              <li>No construction draw process</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-alto-blue mb-4 flex items-center">
          <span className="bg-alto-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">7</span>
          Loan Application Steps
        </h3>
        
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Assess Financial Status</strong></li>
          <li><strong>Get Preliminary Cost Estimate</strong></li>
          <li><strong>Seek Referrals & Explore Lenders</strong></li>
          <li><strong>Choose the Best Loan Program</strong></li>
          <li><strong>Prepare Loan Application Documents</strong></li>
          <li><strong>Start Design & Feasibility Study</strong></li>
          <li><strong>Appraisal & Final Loan Approval</strong></li>
          <li><strong>Loan Disbursement</strong> (in draws or lump sum)</li>
        </ol>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-alto-blue mb-4 flex items-center">
          <span className="bg-alto-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">8</span>
          City-Specific Regulations
        </h3>
        
        <p className="mb-4">
          While statewide laws help, <strong>each city</strong> in <strong>LA and Ventura County</strong> has its own zoning and permitting requirements.
        </p>
        
        <p className="mb-4">
          Alto's <strong>Feasibility Study</strong> evaluates both <strong>local and state laws</strong>, ensuring:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Faster approvals</li>
          <li>Fewer resubmittals</li>
          <li>Reduced risk of unexpected fees</li>
        </ul>
        
        <div>
          <h4 className="font-semibold mb-2">Cities Covered (sample list):</h4>
          <p className="mb-2"><strong>Los Angeles neighborhoods</strong>:</p>
          <p className="mb-4">
            Atwater Village, Baldwin Hills, Beverlywood, Encino, Mar Vista, Silver Lake, Studio City, Venice, West Adams, West Hollywood, Woodland Hills, etc.
          </p>
          
          <p className="mb-2"><strong>Other cities</strong>:</p>
          <p className="mb-4">
            Agoura Hills, Alhambra, Burbank, Calabasas, Camarillo, Culver City, Glendale, Long Beach, Pasadena, Santa Monica, Simi Valley, Thousand Oaks, Torrance, Westlake Village, Whittier, and more.
          </p>
          
          <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
            <p className="text-sm">
              Each has different ADU setback, FAR, parking, and height regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AduGuideSection;
