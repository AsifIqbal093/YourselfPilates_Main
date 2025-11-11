"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ExamplePage = () => {
  const [inputValue, setInputValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

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

      {/* Card Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Examples</h2>

        {/* Basic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Simple Card */}
          <Card>
            <CardHeader>
              <CardTitle>Simple Card</CardTitle>
              <CardDescription>
                A basic card with header and content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                This is a simple card component with a header, description, and
                content area.
              </p>
            </CardContent>
          </Card>

          {/* Card with Footer */}
          <Card>
            <CardHeader>
              <CardTitle>Card with Footer</CardTitle>
              <CardDescription>Includes footer actions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                This card includes a footer section with action buttons.
              </p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button size="sm">Confirm</Button>
            </CardFooter>
          </Card>

          {/* Card with Action */}
          <Card>
            <CardHeader>
              <CardTitle>Card with Action</CardTitle>
              <CardDescription>Header action button</CardDescription>
              <CardAction>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                This card has an action button in the header area.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Feature Cards */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Feature Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-primary">
              <CardHeader>
                <CardTitle>Pilates Classes</CardTitle>
                <CardDescription>Group & Private Sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Join our expert-led pilates classes for all skill levels.
                </p>
                <ul className="text-sm space-y-2">
                  <li>✓ Small group classes</li>
                  <li>✓ One-on-one training</li>
                  <li>✓ Flexible scheduling</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Book a Class</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Membership Plans</CardTitle>
                <CardDescription>Starting at €49/month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-primary">€49</div>
                  <ul className="text-sm space-y-2">
                    <li>✓ 8 classes per month</li>
                    <li>✓ Online booking</li>
                    <li>✓ Member discounts</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Plans
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Get in touch with our team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">
                      Caldas da Rainha, Portugal
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">
                      info@yourselfpilates.com
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">
                  Send Message
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Interactive Cards */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Interactive Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {/* Form Card */}
            <Card>
              <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>
                  Create your account to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input type="text" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <Input type="password" placeholder="••••••••" />
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button className="flex-1">Sign Up</Button>
              </CardFooter>
            </Card>

            {/* Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle>Studio Statistics</CardTitle>
                <CardDescription>Monthly overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">250+</div>
                    <div className="text-xs text-muted-foreground">
                      Active Members
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs text-muted-foreground">
                      Classes This Month
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">4.9</div>
                    <div className="text-xs text-muted-foreground">
                      Average Rating
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-xs text-muted-foreground">
                      Satisfaction Rate
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Card Variants */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Card Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle>Highlighted Card</CardTitle>
                <CardDescription>
                  Card with custom border styling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  This card uses custom border colors to stand out.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>Card with enhanced shadow</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  This card has an elevated appearance with increased shadow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dialog Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dialog Examples</h2>

        {/* Basic Dialogs */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Basic Dialogs</h3>
          <div className="flex flex-wrap gap-4">
            {/* Simple Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button>Simple Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Welcome!</DialogTitle>
                  <DialogDescription>
                    This is a simple dialog with a title and description.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm">
                    Dialogs are great for displaying important information or
                    getting user confirmation.
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            {/* Dialog with Footer */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Dialog with Footer</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirm Action</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to continue?
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm">
                    This action cannot be undone. This will permanently delete
                    your data.
                  </p>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Destructive Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Delete Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete Account?</DialogTitle>
                  <DialogDescription>
                    This action cannot be reversed.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-destructive font-medium">
                    Warning: This will permanently delete your account and all
                    associated data.
                  </p>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button variant="destructive">Delete Account</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Form Dialog */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Form Dialog</h3>
          <Dialog open={isFormDialogOpen} onOpenChange={setIsFormDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary">Book a Class</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Book Your Pilates Class</DialogTitle>
                <DialogDescription>
                  Fill in your details to reserve your spot.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Date</label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Time</label>
                  <Input type="time" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button
                  onClick={() => {
                    alert(`Booking for ${formData.name} (${formData.email})`);
                    setIsFormDialogOpen(false);
                    setFormData({ name: "", email: "" });
                  }}
                >
                  Book Now
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Information Dialogs */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Information Dialogs</h3>
          <div className="flex flex-wrap gap-4">
            {/* Success Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-button">Success Message</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>✓ Success!</DialogTitle>
                  <DialogDescription>
                    Your action was completed successfully.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm">
                    Your booking has been confirmed. You will receive a
                    confirmation email shortly.
                  </p>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button>Got it</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Info Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">About Our Studio</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Yourself Pilates Studio</DialogTitle>
                  <DialogDescription>
                    Premium Pilates in Caldas da Rainha
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <p className="text-sm">
                    Welcome to Yourself Pilates, where we believe in the
                    transformative power of movement and mindful exercise.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">What We Offer:</h4>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Small group classes (max 6 people)</li>
                      <li>• Private one-on-one sessions</li>
                      <li>• Specialized equipment</li>
                      <li>• Certified instructors</li>
                      <li>• Flexible membership plans</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Location:</h4>
                    <p className="text-sm text-muted-foreground">
                      Caldas da Rainha, Portugal
                    </p>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                  <Button>Contact Us</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Custom Size Dialogs */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Custom Size Dialogs</h3>
          <div className="flex flex-wrap gap-4">
            {/* Small Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  Small Dialog
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                  <DialogTitle>Small Dialog</DialogTitle>
                  <DialogDescription>
                    A compact dialog for quick messages.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            {/* Large Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Large Dialog</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Class Schedule</DialogTitle>
                  <DialogDescription>
                    View our weekly pilates class schedule
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">
                          Monday & Wednesday
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <div>9:00 AM - Beginner Mat Class</div>
                        <div>11:00 AM - Intermediate Reformer</div>
                        <div>6:00 PM - Advanced Mat Class</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">
                          Tuesday & Thursday
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <div>8:00 AM - Morning Flow</div>
                        <div>10:00 AM - Prenatal Pilates</div>
                        <div>5:30 PM - Evening Stretch</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                  <Button>Book a Class</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Scrollable Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Scrollable Content</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Terms and Conditions</DialogTitle>
                  <DialogDescription>
                    Please read our terms carefully
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4 text-sm">
                  <p>
                    Welcome to Yourself Pilates. By booking a class or
                    purchasing a membership, you agree to the following terms:
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">1. Class Bookings</h4>
                    <p className="text-muted-foreground">
                      Classes must be booked at least 2 hours in advance.
                      Cancellations must be made 24 hours before the scheduled
                      class time to avoid charges.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">2. Memberships</h4>
                    <p className="text-muted-foreground">
                      Monthly memberships renew automatically. You can cancel at
                      any time with 30 days notice.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">3. Health & Safety</h4>
                    <p className="text-muted-foreground">
                      Please inform your instructor of any injuries or health
                      conditions before class. We reserve the right to refuse
                      service if we believe it may endanger your health.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">4. Studio Rules</h4>
                    <p className="text-muted-foreground">
                      Please arrive 10 minutes early for class. Late arrivals
                      may not be admitted to maintain a peaceful environment for
                      all participants.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">5. Equipment</h4>
                    <p className="text-muted-foreground">
                      All equipment is provided. Please treat it with care and
                      report any damage immediately.
                    </p>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Decline</Button>
                  </DialogClose>
                  <Button>Accept Terms</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamplePage;
