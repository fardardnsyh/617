import { FeaturesItemProps } from "@/types";
import FeatureItem from "../atoms/FeatureItem";

export default function FeaturesList({ features }: FeaturesItemProps) {
  return (
    <ul className="mt-2 list-disc ml-4">
      {features.map((feature, idx) => (
        <FeatureItem key={idx} feature={feature} />
      ))}
    </ul>
  );
}
