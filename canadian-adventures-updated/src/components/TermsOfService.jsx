import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button.jsx";

export function TermsOfService({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-gray-900 text-white border-gray-700">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Last updated: July 29, 2024
          </DialogDescription>
        </DialogHeader>
        <div className="prose prose-invert max-h-[60vh] overflow-y-auto">
          <p>Welcome to Epic Canadian Adventures!</p>
          <p>
            These terms and conditions outline the rules and regulations for the
            use of our website.
          </p>
          <p>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use Epic Canadian Adventures if you
            do not agree to take all of the terms and conditions stated on
            this page.
          </p>
          <h4>Cookies</h4>
          <p>
            We employ the use of cookies. By accessing Epic Canadian
            Adventures, you agreed to use cookies in agreement with the
            Privacy Policy.
          </p>
          <h4>License</h4>
          <p>
            Unless otherwise stated, Epic Canadian Adventures and/or its
            licensors own the intellectual property rights for all material on
            Epic Canadian Adventures. All intellectual property rights are
            reserved. You may access this from Epic Canadian Adventures for
            your own personal use subjected to restrictions set in these terms
            and conditions.
          </p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from Epic Canadian Adventures</li>
            <li>
              Sell, rent or sub-license material from Epic Canadian Adventures
            </li>
            <li>
              Reproduce, duplicate or copy material from Epic Canadian
              Adventures
            </li>
            <li>Redistribute content from Epic Canadian Adventures</li>
          </ul>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
