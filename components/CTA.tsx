import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-xl mb-8">Sign up now and transform your business today!</p>
        <Button variant="secondary" size="lg">Sign Up Now</Button>
      </div>
    </section>
  );
}