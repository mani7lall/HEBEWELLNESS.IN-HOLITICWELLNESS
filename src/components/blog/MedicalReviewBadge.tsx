import { ShieldCheck } from "lucide-react";

interface MedicalReviewBadgeProps {
  reviewerName: string;
  reviewerCredentials: string;
  date: string;
}

export default function MedicalReviewBadge({ reviewerName, reviewerCredentials, date }: MedicalReviewBadgeProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-sage-50 border border-sage-900/10 mb-8 my-10">
      <div className="w-12 h-12 rounded-full bg-sage-900/10 flex items-center justify-center text-sage-900 shrink-0">
        <ShieldCheck className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm font-medium text-sage-950 flex items-center gap-2">
          Medically Reviewed by {reviewerName}, <span className="text-earth-500">{reviewerCredentials}</span>
        </p>
        <p className="text-xs text-sage-900/60 mt-1">Updated on {date} • Evidence Based</p>
      </div>
    </div>
  );
}