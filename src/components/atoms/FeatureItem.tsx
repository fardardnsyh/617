import { FeatureItemProps } from "@/types";

export default function FeatureItem({feature}: FeatureItemProps) {
  return (
    <li className="mb-1">
      {feature}
    </li>
  );
}