import { motion, AnimatePresence } from "framer-motion";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-0">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Header / Icon */}
            <div className="flex flex-col items-center bg-gradient-to-b from-orange-50 to-white px-6 py-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl">
                🔒
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">Login Required</h3>
              <p className="text-sm text-gray-600">
                You must be logged in to register for this exclusive webinar event.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 px-6 pb-8 pt-2">
              <a href={`${import.meta.env.VITE_WEBINAR_URL || 'http://localhost:5173'}/login`} className="w-full">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:shadow-orange-500/40"
                >
                  Log In Now
                </motion.button>
              </a>

              <button
                onClick={onClose}
                className="w-full rounded-xl border-2 border-gray-100 bg-white py-3.5 text-sm font-bold text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
              >
                Cancel
              </button>
            </div>

            {/* Close X Button top-right */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
