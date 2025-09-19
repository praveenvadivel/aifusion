import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authBgImage = PlaceHolderImages.find(p => p.id === 'auth-background');

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-3">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r md:flex lg:col-span-2">
        {authBgImage && (
             <Image
                src={authBgImage.imageUrl}
                alt={authBgImage.description}
                fill
                className="object-cover"
                data-ai-hint={authBgImage.imageHint}
             />
        )}
        <div className="relative z-20 flex items-center text-3xl font-bold font-headline text-primary-foreground drop-shadow-md">
           <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-8 w-8 text-accent"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          HealthMate
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg text-primary-foreground drop-shadow-sm">
              &ldquo;Your personal healthcare companion, always by your side.&rdquo;
            </p>
            <footer className="text-sm text-primary-foreground/80">HealthMate Team</footer>
          </blockquote>
        </div>
      </div>
      <div className="relative flex h-full w-full items-center justify-center p-8 bg-background">
        {children}
      </div>
    </div>
  );
}
