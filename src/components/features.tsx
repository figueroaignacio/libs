// Components
import { ArrowRight, Code2, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const features = [
  {
    title: "Type-Safe",
    description:
      "Built with TypeScript for complete type safety and excellent IDE support.",
    icon: <Zap className="text-primary" />,
  },
  {
    title: "Production Ready",
    description: "Battle-tested utilities used in real-world applications.",
    icon: <Code2 className=" text-primary" />,
  },
  {
    title: "Easy to Use",
    description: "Simple APIs with comprehensive documentation and examples.",
    icon: <ArrowRight className="text-primary" />,
  },
];

export function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-16">
      {features.map((feature) => (
        <Card variant="default" key={feature.title}>
          <CardHeader compact>
            <CardTitle className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                {feature.icon}
              </div>
              Type-Safe
            </CardTitle>
          </CardHeader>
          <CardContent compact className="text-left">
            <CardDescription>{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
