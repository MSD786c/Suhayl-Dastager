import { GlowCard } from "@/components/ui/spotlight-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function SpotlightCardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <GlowCard glowColor="brand" size="md">
        <Card className="h-full bg-white/80 dark:bg-[#1A2730]/80 backdrop-blur-sm border-0 shadow-none">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
              Project Title
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-[#B0CEE2]/80">
              This is a sample project description showing how the spotlight card looks with your portfolio's styling.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary">
                <Github className="h-4 w-4 mr-1" />
                Code
              </Button>
              <Button size="sm" variant="secondary">
                <ExternalLink className="h-4 w-4 mr-1" />
                Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </GlowCard>
      
      <GlowCard glowColor="blue" size="md">
        <Card className="h-full bg-white/80 dark:bg-[#1A2730]/80 backdrop-blur-sm border-0 shadow-none">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
              Another Project
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-[#B0CEE2]/80">
              This demonstrates a different glow color option while maintaining your portfolio's aesthetic.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary">
                <Github className="h-4 w-4 mr-1" />
                Code
              </Button>
            </div>
          </CardContent>
        </Card>
      </GlowCard>
      
      <GlowCard glowColor="purple" size="md">
        <Card className="h-full bg-white/80 dark:bg-[#1A2730]/80 backdrop-blur-sm border-0 shadow-none">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
              Third Project
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-[#B0CEE2]/80">
              This shows how the glow effect works with different colors while keeping your branding consistent.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary">
                <ExternalLink className="h-4 w-4 mr-1" />
                Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </GlowCard>
    </div>
  );
}