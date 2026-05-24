"use client";

import Script from "next/script";

export const CreateAccountForm = () => {
  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        async
        defer
      />
      <form
        acceptCharset="UTF-8"
        action={`https://${process.env.NEXT_PUBLIC_APP_DOMAIN}/api/account/public/accounts-form`}
        autoComplete="true"
        className="flex flex-wrap"
        id="form-cadastro"
        method="post"
      >
        <div className="w-full md:w-1/2 lg:w-1/4 p-2">
          <label htmlFor="cadastro-nome" className="sr-only">
            Your name
          </label>
          <input
            id="cadastro-nome"
            name="name"
            placeholder="Your name"
            size="30"
            type="text"
            required
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-2">
          <label htmlFor="cadastro-empresa" className="sr-only">
            Company
          </label>
          <input
            id="cadastro-empresa"
            name="company"
            placeholder="Company"
            size="30"
            type="text"
            required
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-2">
          <label htmlFor="cadastro-email" className="sr-only">
            Email
          </label>
          <input
            id="cadastro-email"
            name="email"
            placeholder="Email"
            autoComplete="username"
            size="30"
            type="email"
            required
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-2">
          <label htmlFor="cadastro-senha" className="sr-only">
            Password
          </label>
          <input
            id="cadastro-senha"
            name="password"
            placeholder="Password"
            size="30"
            type="password"
            autoComplete="current-password"
            required
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>

        <input
          type="hidden"
          id="cadastro-domain"
          name="domain"
          value={process.env.NEXT_PUBLIC_APP_DOMAIN}
        />
        <input
          type="hidden"
          id="cadastro-timezone"
          name="timezone"
          value="Europe/London"
        />
        <input type="hidden" id="cadastro-lang" name="lang" value="en" />

        <div
          className="cf-turnstile"
          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          data-appearance="interaction-only"
          data-size="compact"
        />


        <div className="mt-6 w-full flex items-center justify-center gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create a free account
          </button>
          <a href="/pricing" className="text-sm font-semibold leading-6 text-gray-900">
            View pricing <span aria-hidden="true">→</span>
          </a>
        </div>
      </form>
    </>
  );
};
