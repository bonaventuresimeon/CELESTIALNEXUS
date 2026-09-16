'use client';
export default function Error({reset}:{reset:()=>void}){return <section className="error-page"><span className="eyebrow">SOMETHING WENT WRONG</span><h1>We couldn’t load this page.</h1><p>Try again, or return home. No trading action has been taken by this website.</p><button className="button gold-button" onClick={reset}>Try again</button></section>}
