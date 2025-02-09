import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">Welcome to Our SaaS Platform</h1>
      <p className="text-xl mb-8">Revolutionize your workflow with our cutting-edge solution</p>
      <Button size="lg">Get Started</Button>
    </section>
  );
}