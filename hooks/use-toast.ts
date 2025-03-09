// This is a simplified version for the demo
// In a real app, you might want to use a proper toast library like react-hot-toast or react-toastify

export function toast({
  title,
  description,
  variant = "default",
  duration = 3000,
}: {
  title: string
  description?: string
  variant?: "default" | "destructive" | "success"
  duration?: number
}) {
  // Create toast element
  const toastEl = document.createElement("div")
  toastEl.className =
    "fixed top-4 right-4 z-50 max-w-md rounded-lg p-4 shadow-lg transition-all duration-500 transform translate-y-0 opacity-0"

  // Set background based on variant
  if (variant === "destructive") {
    toastEl.classList.add("bg-red-600", "text-white")
  } else if (variant === "success") {
    toastEl.classList.add("bg-green-600", "text-white")
  } else {
    toastEl.classList.add("bg-primary", "text-black")
  }

  // Create title
  const titleEl = document.createElement("div")
  titleEl.className = "font-medium"
  titleEl.textContent = title
  toastEl.appendChild(titleEl)

  // Create description if provided
  if (description) {
    const descEl = document.createElement("div")
    descEl.className = "text-sm mt-1"
    descEl.textContent = description
    toastEl.appendChild(descEl)
  }

  // Create close button
  const closeBtn = document.createElement("button")
  closeBtn.className = "absolute top-2 right-2 text-sm opacity-70 hover:opacity-100"
  closeBtn.textContent = "✕"
  closeBtn.onclick = () => {
    hideToast()
  }
  toastEl.appendChild(closeBtn)

  // Add to DOM
  document.body.appendChild(toastEl)

  // Show toast
  setTimeout(() => {
    toastEl.classList.remove("translate-y-0", "opacity-0")
    toastEl.classList.add("translate-y-4", "opacity-100")
  }, 10)

  // Hide toast after duration
  const hideTimeout = setTimeout(hideToast, duration)

  // Hide function
  function hideToast() {
    clearTimeout(hideTimeout)
    toastEl.classList.remove("translate-y-4", "opacity-100")
    toastEl.classList.add("translate-y-0", "opacity-0")

    setTimeout(() => {
      if (document.body.contains(toastEl)) {
        document.body.removeChild(toastEl)
      }
    }, 300)
  }
}

