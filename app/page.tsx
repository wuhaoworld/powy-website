import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/logo.png"
                alt="Powy Logo"
                width={90}
                height={90}
                className="rounded-3xl shadow-lg"
              />
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Powy: PowerPoint, <span className="text-blue-600 dark:text-blue-400">made easy</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform complex documents into professional, fully-editable PowerPoint presentations with AI that understands your content's depth and logic.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href=''>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg text-lg transition-colors duration-200 border-2 border-blue-600 hover:border-blue-700">
                  Join Waitlist
                </button>
              </Link>
              {/* <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 font-semibold px-6 py-2 rounded-lg text-lg transition-colors duration-200">
                Watch Demo
              </button> */}
            </div>

            {/* Key Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Native .pptx output</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Custom brand templates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Complex element support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
              Why existing AI presentation tools fall short
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Image src='/images/content.png' width={50} height={50} alt='' />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Shallow Content</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">AI tools produce "4th-grade level" content, losing the depth and logic of your original documents</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Image src='/images/locked.png' width={50} height={50} alt='' />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Format Lock-in</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Web links or locked PDFs instead of editable .pptx files that fit your workflow</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Image src='/images/graphic-design.png' width={50} height={50} alt='' />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Brand Mismatch</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Generic templates that don't match your company's brand guidelines</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Image src='/images/poor-complex.png' width={50} height={50} alt='' />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Poor Complex Elements</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Cannot handle charts, tables, and mathematical formulas properly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              How Powy solves these problems
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Powy isn't just another text-to-slides generator. It's a professional document transformation engine designed for knowledge workers who demand quality and control.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image src='/images/deep-learning.png' width={50} height={50} alt='' />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Deep Document Understanding
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Powy's AI engine analyzes document structure hierarchically, preserving the complete logic tree of titles, subtitles, lists, and paragraph relationships—not just extracting keywords.
                  </p>
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    ✓ Respects your original wisdom and maintains professional depth
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image src='/images/pptx.png' width={40} height={40} alt='' />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Native .pptx Delivery
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Get fully editable PowerPoint files that seamlessly integrate into your existing workflow. No platform lock-in, no learning curve—just professional presentations ready for your team.
                  </p>
                  <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                    ✓ Works with PowerPoint, Google Slides, and all your existing tools
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image src='/images/accurate.png' width={40} height={40} alt='' />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    High-Fidelity Element Conversion
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Accurately converts complex tables, charts, and mathematical formulas from academic papers and business reports, maintaining data integrity and professional appearance.
                  </p>
                  <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                    ✓ Perfect for technical and academic content that other tools can't handle
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image src='/images/reputation.png' width={50} height={50} alt='' />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Enterprise Brand Consistency
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Upload your company's PowerPoint templates and Powy will generate content within your brand guidelines—fonts, colors, logos, and layouts that meet enterprise standards.
                  </p>
                  <div className="text-sm text-orange-600 dark:text-orange-400 font-medium">
                    ✓ Ready for client presentations and board meetings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Built for professionals who demand excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Powy serves knowledge workers who value quality and efficiency in their presentation workflows
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultants & Analysts */}
            <div className="text-center p-6">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image src='/images/analyst.png' width={60} height={60} alt='' />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Consultants & Financial Analysts
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-left">
                Transform dense analysis reports into client-ready presentations that maintain analytical rigor while meeting strict brand standards. Save hours on formatting to focus on insights that matter.
              </p>
            </div>

            {/* Academics & Researchers */}
            <div className="text-center p-6">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image src='/images/scholar.png' width={60} height={60} alt='' />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Academics & Researchers
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-left">
                Convert research papers with complex data, formulas, and charts into clear conference presentations. Preserve technical accuracy while making content accessible to broader audiences.
              </p>
            </div>

            {/* Marketing & Strategy */}
            <div className="text-center p-6">
              <div className="w-24 h-24 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image src='/images/marketing.png' width={60} height={60} alt='' />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Marketing & Strategy Teams
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-left">
                Adapt white papers, market reports, and business plans into compelling presentations for different audiences—from executive leadership to sales teams to external stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your documents into professional presentations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join professionals who trust Powy to preserve their content's intelligence while saving hours of manual formatting work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href=''>
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-2 rounded-lg text-lg transition-colors duration-200 border-2 border-white hover:border-gray-100">
                Join Waitlist
              </button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Enterprise support available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <Image
                src="/logo.png"
                alt="Powy Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">Powy</span>
            </div>

            <div className="flex gap-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Powy. PowerPoint, made easy.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
