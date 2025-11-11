"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ExamplePage = () => {
  const [inputValue, setInputValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Shadcn UI Component Examples</h1>

      {/* Button Variants */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      {/* Button Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* Disabled Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Disabled State</h2>
        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled Default</Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
          <Button variant="secondary" disabled>
            Disabled Secondary
          </Button>
        </div>
      </section>

      {/* Interactive Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Interactive Examples</h2>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
          <Button
            variant="outline"
            onClick={() => console.log("Logged to console")}
          >
            Log to Console
          </Button>
        </div>
      </section>

      {/* Input Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Input Examples</h2>

        {/* Basic Input Types */}
        <div className="space-y-3 max-w-md">
          <div className="space-y-2">
            <label className="text-sm font-medium">Text Input</label>
            <Input
              type="text"
              placeholder="Enter your name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {inputValue && (
              <p className="text-xs text-muted">Current value: {inputValue}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email Input</label>
            <Input
              type="email"
              placeholder="name@example.com"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password Input</label>
            <Input type="password" placeholder="Enter your password" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Number Input</label>
            <Input
              type="number"
              placeholder="Enter a number"
              min="0"
              max="100"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Date Input</label>
            <Input type="date" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Time Input</label>
            <Input type="time" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Search Input</label>
            <Input type="search" placeholder="Search..." />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">File Input</label>
            <Input type="file" />
          </div>
        </div>
      </section>

      {/* Input States */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Input States</h2>

        <div className="space-y-3 max-w-md">
          <div className="space-y-2">
            <label className="text-sm font-medium">Disabled Input</label>
            <Input type="text" placeholder="Disabled input" disabled />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Read-Only Input</label>
            <Input type="text" value="Read-only value" readOnly />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Invalid Input</label>
            <Input
              type="email"
              placeholder="Invalid email"
              aria-invalid="true"
            />
            <p className="text-xs text-destructive">
              Please enter a valid email address
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Required Input</label>
            <Input type="text" placeholder="Required field" required />
          </div>
        </div>
      </section>

      {/* Input with Actions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Input with Actions</h2>

        <div className="space-y-3 max-w-md">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Input with Submit Button
            </label>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter text..."
                className="flex-1"
              />
              <Button>Submit</Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Search with Button</label>
            <div className="flex gap-2">
              <Input type="search" placeholder="Search..." className="flex-1" />
              <Button variant="secondary">Search</Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email Subscription</label>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="flex-1"
              />
              <Button className="bg-gradient-button">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamplePage;
