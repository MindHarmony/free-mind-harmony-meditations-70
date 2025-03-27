
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Helmet>
        <title>Terms & Disclaimer - Mind Harmony</title>
        <meta name="description" content="Terms and disclaimer for Mind Harmony's meditation and hypnosis recordings." />
      </Helmet>

      <Link to="/">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>

      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-calm-900">Terms & Disclaimer</h1>
        
        <div className="p-6 border border-calm-200 rounded-lg bg-calm-50">
          <h2 className="text-xl font-medium text-calm-800 mb-4">Disclaimer:</h2>
          <p className="text-calm-700 leading-relaxed">
            The hypnosis/meditation recordings on this site are designed for relaxation and personal development purposes only. 
            Do not listen while driving, operating machinery, or performing any activity that requires your full attention. 
            Only use this recording in a safe, comfortable environment where you can fully relax.
          </p>
          <p className="text-calm-700 leading-relaxed mt-4">
            These recordings are not a substitute for medical or psychological treatment. If you have any concerns, 
            please consult a qualified professional before use. By listening, you acknowledge that you do so at your own risk.
          </p>
        </div>

        <div className="p-6 border border-calm-200 rounded-lg">
          <h2 className="text-xl font-medium text-calm-800 mb-4">Safe Usage Guidelines:</h2>
          <ul className="list-disc pl-5 space-y-2 text-calm-700">
            <li>Listen in a comfortable, quiet environment where you won't be disturbed</li>
            <li>Ensure you are sitting or lying in a comfortable position</li>
            <li>Use headphones for the best experience when possible</li>
            <li>If you feel uncomfortable at any point, simply open your eyes and stop the recording</li>
            <li>Allow time after each session to fully return to alert awareness before resuming activities</li>
          </ul>
        </div>
      </div>

      <footer className="mt-10 pt-6 border-t border-calm-100 text-center text-sm text-calm-500">
        <p>© {new Date().getFullYear()} Mind Harmony. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Terms;
