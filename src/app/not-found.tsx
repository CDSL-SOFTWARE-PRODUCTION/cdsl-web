import * as React from 'react';
import Button from '@components/ui/Button';

export const metadata = {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist or has been moved.",
};

export default function NotFound() {
    return (
        <div className="w-full min-h-[80vh] flex items-center bg-premium-navy">
            <div className="site-container mx-auto px-4 py-12 text-center">
                <div className="max-w-2xl mx-auto">
                    <h1 className="mb-4 text-9xl font-bold text-premium-blue">404</h1>
                    <h2 className="text-3xl font-display font-medium text-white mb-8">Page Not Found</h2>
                    <p className="text-premium-gray mb-12">
                        The page you're looking for doesn't exist or has been moved.
                        Please check the URL or navigate back to our homepage.
                    </p>
                    <div>
                        <Button
                            href="/"
                            variant="primary"
                            size="lg"
                        >
                            Back to Homepage
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
