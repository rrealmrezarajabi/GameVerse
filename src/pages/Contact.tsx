import { useForm, type SubmitHandler } from "react-hook-form";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>();

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    await new Promise((res) => setTimeout(res, 800));
    console.log(data);
    reset();
  };

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-4 py-12">
      <div className="w-full max-w-xl rounded-2xl bg-gray-900/70 border border-gray-800 shadow-2xl p-8 backdrop-blur-lg">
        <div className="mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Have a question about GameVerse or the RAWG API project?
          </p>
        </div>

        {isSubmitSuccessful && (
          <div className="mb-4 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
            Your message has been sent.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-200">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-gray-700 bg-gray-900/80 px-3 py-2 text-sm text-gray-100 outline-none transition focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-xs text-pink-400">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-700 bg-gray-900/80 px-3 py-2 text-sm text-gray-100 outline-none transition focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-xs text-pink-400">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-200">Subject</label>
            <input
              type="text"
              placeholder="What is this about?"
              className="w-full rounded-lg border border-gray-700 bg-gray-900/80 px-3 py-2 text-sm text-gray-100 outline-none transition focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <p className="text-xs text-pink-400">{errors.subject.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-200">Message</label>
            <textarea
              rows={4}
              placeholder="Write your message..."
              className="w-full rounded-lg border border-gray-700 bg-gray-900/80 px-3 py-2 text-sm text-gray-100 outline-none transition resize-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-xs text-pink-400">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full rounded-full bg-pink-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-400 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
