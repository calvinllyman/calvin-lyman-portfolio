export default function DesignProjectsCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Design Projects Portfolio
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Product design work from leading enterprise HR technology initiatives at Paycom
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Product Design</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">User Research</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Design Leadership</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Enterprise UX</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The following projects represent key products I designed or led design teams to build at Paycom. 
                For each initiative, I was responsible for hands-on design, user research, facilitating workshops, 
                managing stakeholders, and delivering high-fidelity prototypes through iterative testing.
              </p>
              <p className="text-gray-600 italic">
                Note: Visual assets will be added as they become available. The narratives below demonstrate 
                the problem-solving approach, design process, and measurable impact of each project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project 1: Beti */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Beti – Employee-Driven Payroll Automation</h2>
            
            {/* Product Image */}
            <div className="mb-8">
              <img 
                src="/images/paycom/beti.png" 
                alt="Beti payroll dashboard showing automated payroll updates and check approvals"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            
            {/* Problem */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-red-600 font-bold">P</span>
                Problem
              </h3>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  Manual payroll processing was tedious and error-prone. Payroll administrators spent days reconciling errors each pay cycle, 
                  and HR had to correct employee data issues repeatedly. Employees had little visibility into their paychecks before payday, 
                  leading to last-minute corrections and compliance headaches.
                </p>
              </div>
            </div>

            {/* Design Process */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-blue-600 font-bold">D</span>
                Design Process
              </h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>User Research:</strong> Led interviews with payroll admins and HR leaders across healthcare, manufacturing, transportation, and other industries to understand pain points and requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Design Direction:</strong> Created Beti as an employee-guided payroll experience that flips the traditional process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Prototyping:</strong> Built high-fidelity prototypes of a mobile-first interface where employees could view, troubleshoot, and approve their own paychecks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Iteration:</strong> Facilitated design workshops and iterative testing with end-users, refining dashboard and notifications</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-green-600 font-bold">S</span>
                Solution
              </h3>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Beti automatically pulls live data (timecards, expenses, PTO, benefits changes) every pay period and alerts employees 
                  of any discrepancies to fix in real time. The self-service interface empowers employees to own their data and catch errors 
                  before payroll submission. Payroll managers maintain oversight through a central dashboard with real-time status indicators.
                </p>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-600 mb-2"><strong>Key Features:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Employee self-service paycheck review and approval</li>
                    <li>• Automated data validation and error detection</li>
                    <li>• Real-time notifications for discrepancies</li>
                    <li>• Manager dashboard for oversight and intervention</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-purple-600 font-bold">I</span>
                Impact
              </h3>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-5 shadow-sm">
                    <div className="text-4xl font-bold text-purple-700 mb-2">90%</div>
                    <div className="text-gray-700">Faster payroll processing with Beti</div>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-sm">
                    <div className="text-4xl font-bold text-purple-700 mb-2">~0</div>
                    <div className="text-gray-700">"Zero time fixing errors" reported by payroll managers</div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>"I spend zero time fixing errors now that we have Beti."</strong> — Payroll Manager
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Beti transformed payroll from a multi-step, back-office ordeal into a streamlined, employee-centric experience 
                    that boosted accuracy, productivity, and trust. By empowering employees to verify their pay, virtually all payroll 
                    mistakes and manual corrections were eliminated.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-12">
              <a 
                href="https://www.paycom.com/software/beti/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more about Beti
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project 2: GONE */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">GONE – Automated Time-Off Approvals</h2>
            
            {/* Product Image */}
            <div className="mb-8">
              <img 
                src="/images/paycom/gone.png" 
                alt="GONE mobile app showing time-off request interface and employee menu"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-red-600 font-bold">P</span>
                Problem
              </h3>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  Managing employee time-off requests was a hassle for all involved. Often 50% of time-off requests weren't decided 
                  until after the employee had already taken leave. The manual approval process led to scheduling conflicts, staffing 
                  shortages, and frustrated employees left "in the dark" about their vacation approvals. HR faced decision fatigue from 
                  applying complex policies (seniority rules, blackouts, etc.) by hand for each request.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-blue-600 font-bold">D</span>
                Design Process
              </h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Rapid Development:</strong> Managed UX team through 0-1 product cycle in just 12 weeks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Requirements Gathering:</strong> Worked with HR policy experts and frontline managers to encode company-specific rules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Rules Engine Design:</strong> Created UI for managers to configure criteria (seniority, staffing levels, accrual balances, black-out dates)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Real-time Feedback:</strong> Designed instant approval/denial notifications with explanatory notes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Testing:</strong> Oversaw usability testing to ensure automation felt transparent and trustworthy</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-green-600 font-bold">S</span>
                Solution
              </h3>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  GONE features a clear calendar interface with an automated rules engine. When an employee submits a time-off request, 
                  GONE automatically evaluates it against configured criteria and instantly marks requests "Approved" or "Denied" with 
                  explanatory notes. Employees receive immediate notifications, eliminating uncertainty and wait times.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-purple-600 font-bold">I</span>
                Impact
              </h3>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-5 shadow-sm">
                    <div className="text-4xl font-bold text-purple-700 mb-2">821%</div>
                    <div className="text-gray-700">Projected ROI according to Forrester study</div>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-sm">
                    <div className="text-4xl font-bold text-purple-700 mb-2">~200</div>
                    <div className="text-gray-700">Hours saved annually per organization</div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-gray-700 leading-relaxed">
                    GONE effectively made time-off approval headaches "gone." Decisions are made instantly and fairly, ensuring companies 
                    are never caught short-staffed. Managers experienced huge relief from decision fatigue, and employees loved the faster 
                    responses. This automation improved compliance with time-off policies and kept business operations running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project 3: Expense Management */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Expense Management – Simplifying Reimbursements</h2>
            
            {/* Product Image */}
            <div className="mb-8">
              <img 
                src="/images/paycom/expense-management.png" 
                alt="Expense Management mobile interface showing receipt capture and expense approval"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-red-600 font-bold">P</span>
                Problem
              </h3>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  Expense reimbursement involved paper receipts, spreadsheets, and lots of manual data entry. Employees struggled to keep 
                  track of receipts, managers had to verify expenses across emails and forms, and accounting feared errors like duplicate 
                  reimbursements. The process was slow and error-prone, often delaying paybacks to employees.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-blue-600 font-bold">D</span>
                Design Process
              </h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Stakeholder Workshops:</strong> Conducted sessions with finance teams and traveling employees to map ideal workflow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Mobile-First Design:</strong> Created seamless mobile experience for on-the-go receipt capture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>OCR Integration:</strong> Designed automatic field population from receipt photos using optical character recognition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Manager Dashboard:</strong> Built intuitive review interface with status indicators and one-click approvals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Iterative Testing:</strong> Refined mobile upload and approval flows to reduce multi-step process to just a few taps</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-green-600 font-bold">S</span>
                Solution
              </h3>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Paycom's Expense Management tool enables employees to snap a photo of a receipt with their phone. The system automatically 
                  reads the receipt and auto-fills details like amount, date, and merchant. AI-powered duplicate detection warns users if the 
                  same receipt was already submitted. All approved expenses flow seamlessly into payroll for reimbursement in the next check.
                </p>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-600 mb-2"><strong>Key Features:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• In-app receipt capture via smartphone camera</li>
                    <li>• Automatic OCR and field population</li>
                    <li>• AI-powered duplicate detection</li>
                    <li>• Manager dashboard with one-click approvals</li>
                    <li>• Direct integration with payroll system</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-purple-600 font-bold">I</span>
                Impact
              </h3>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The transformation was immediate: no more lost receipts, no more spreadsheets, and faster payouts. The system virtually 
                  eliminated manual data re-entry and errors in expense reports. Managers can approve expenses via the same app, accelerating 
                  reimbursement cycles. The result is a smoother experience for employees and significant time saved for HR and accounting.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Business Impact:</strong> Eliminated manual data entry, prevented duplicate reimbursements, and accelerated 
                    reimbursement timelines by integrating directly with payroll processing.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-12">
              <a 
                href="https://www.paycom.com/software/expense-management/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more about Expense Management
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project 4: Clue */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Clue – COVID-19 Vaccination Tracking for Compliance</h2>
            
            {/* Product Image */}
            <div className="mb-8">
              <img 
                src="/images/paycom/clue.png" 
                alt="Clue immunization tracking dashboard showing vaccination status and compliance metrics"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-red-600 font-bold">P</span>
                Problem
              </h3>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  During the COVID-19 pandemic, organizations needed a quick way to track employee vaccination status and testing results to 
                  comply with health mandates and keep workplaces safe. HR was cobbling together spreadsheets or manual records, which was 
                  time-consuming and prone to errors. Companies faced serious compliance risks and operational challenges.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-blue-600 font-bold">D</span>
                Design Process
              </h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Rapid Development:</strong> Managed design team from concept to market in 12 weeks (0-1 product)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Compliance Research:</strong> Interviewed HR compliance officers to identify crucial data points (vaccine doses, dates, test types, exemption statuses)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Employee Interface:</strong> Designed simple, guided self-service for easy upload of vaccination proof or test results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Admin Dashboard:</strong> Created action-based dashboard showing company-wide vaccination rates and compliance status</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Automation:</strong> Built reminder system for scheduled tests and automated compliance reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Rapid Testing:</strong> Performed quick usability tests with pilot HR users, refining clarity under tight timelines</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-green-600 font-bold">S</span>
                Solution
              </h3>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Clue provides a secure, centralized system for collecting, tracking, and managing employees' vaccination and testing data. 
                  Employees can easily upload proof with just a few taps on their phone. The system sends automatic reminders for scheduled 
                  tests and compiles all data into compliance reports. HR can exclude certain groups (remote workers, exemptions) from requirements 
                  and get real-time snapshots of company-wide compliance.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-purple-600 font-bold">I</span>
                Impact
              </h3>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <div className="bg-white rounded-lg p-5 shadow-sm mb-4">
                  <div className="text-4xl font-bold text-purple-700 mb-2">12 Weeks</div>
                  <div className="text-gray-700">From concept to market launch</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Clue brought peace of mind and order to a chaotic compliance task. The process that once relied on emails and spreadsheets 
                  became painless. HR departments could stay one step ahead of COVID-19 by viewing real-time data and making informed decisions 
                  to maintain workplace safety. Companies using Clue were able to keep operations running smoothly without COVID outbreaks or fines.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Business Impact:</strong> Enabled organizations to navigate the pandemic with a higher level of safety, confidence, 
                    and efficiency. Automated compliance tracking prevented fines and maintained operational continuity during a critical period.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-12">
              <a 
                href="https://www.paycom.com/software/clue/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more about Clue
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project 5: Time & Attendance Configurator */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Time & Attendance Configurator – Self-Service Policy Management</h2>
            
            {/* Product Image */}
            <div className="mb-8">
              <img 
                src="/images/paycom/time-attendance.png" 
                alt="Time and Attendance Configurator showing pay class setup and configuration options"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-red-600 font-bold">P</span>
                Problem
              </h3>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  Configuring time-tracking rules (overtime, shifts, breaks, attendance policies) was traditionally complex and required heavy 
                  involvement from technical support. HR managers found it difficult to make changes because interfaces were unintuitive and they 
                  feared mistakes that could cause payroll errors. This led to delays in implementing policy changes and a lack of agility.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-blue-600 font-bold">D</span>
                Design Process
              </h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Pain Point Analysis:</strong> Worked with product managers and clients to identify configuration challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Wizard Design:</strong> Created step-by-step configuration wizard breaking complex settings into manageable sections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Plain Language:</strong> Incorporated descriptions and help tips so users understand implications of each setting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Preview Function:</strong> Designed simulation feature allowing admins to preview how changes affect timesheets before going live</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Iterative Testing:</strong> Conducted multiple rounds of usability testing with HR administrators to minimize jargon</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-green-600 font-bold">S</span>
                Solution
              </h3>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Time and Attendance Configurator is an intuitive, self-guided wizard that empowers HR to manage time-tracking needs without 
                  IT intervention. It breaks down complex settings (pay classes, overtime rules, grace periods, shift differentials) into manageable 
                  sections with plain-language descriptions. The hallmark "Preview Changes" function lets admins simulate proposed changes before they 
                  go live, providing confidence and a safety net.
                </p>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-600 mb-2"><strong>Key Features:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Step-by-step configuration wizard</li>
                    <li>• Real-time validation and help tips</li>
                    <li>• Preview changes before implementation</li>
                    <li>• Plain-language descriptions of settings</li>
                    <li>• Self-service without IT support</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-purple-600 font-bold">I</span>
                Impact
              </h3>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The configurator made managing complex attendance policies simple and error-free. HR teams can now set up, manage, and maintain 
                  time-tracking needs with confidence. What used to take numerous back-and-forth emails with support can now be done in-house in 
                  minutes. This greatly reduces the risk of compliance issues or paycheck errors when policies change.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Business Impact:</strong> Eliminated need for technical support in policy adjustments, saved time and costs, and made 
                    organizations more agile in managing labor compliance.
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> When a new law requires overtime after 8 hours instead of 40 hours weekly, an admin can adjust that 
                    rule same-day without external support.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-12">
              <a 
                href="https://www.paycom.com/software/time-and-labor-management/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more about Time and Labor Management
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <a 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group transition-colors"
            >
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
