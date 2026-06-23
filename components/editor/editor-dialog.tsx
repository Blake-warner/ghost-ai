"use client"

import type { ReactNode } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface EditorDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  footerActions?: ReactNode
}

export function EditorDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footerActions,
}: EditorDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-5 border-surface-border bg-elevated p-6 text-copy-primary sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-copy-primary">{title}</DialogTitle>
          {description ? (
            <DialogDescription className="text-copy-muted">
              {description}
            </DialogDescription>
          ) : null}
        </DialogHeader>
        {children}
        {footerActions ? (
          <DialogFooter className="-mx-6 -mb-6 border-surface-border bg-subtle/50 p-6">
            {footerActions}
          </DialogFooter>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
