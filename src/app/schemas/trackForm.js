// schemas/trackFormSchema.js
import { z } from 'zod';

export const trackFormSchema = z.object({
  trackTitle: z.string().nonempty({ message: "Track Title is required" }),
  trackCategory: z.string().nonempty({ message: "Track Category is required" }),
  audioFile: z.any(),
  callerTuneDate: z.string().nonempty({ message: "Caller Tune Date is required" }),
  trackType: z.string().nonempty({ message: "Track Type is required" }),
  trackArtistsPrimary: z.array(z.string().nonempty({ message: "Primary Artist is required" })),
  version: z.string().nonempty({ message: "Version is required" }),
  trackArtistsProducer: z.array(z.string().nonempty({ message: "Producer Artist is required" })),
  lyricists: z.array(z.object({
    name: z.string().nonempty({ message: "Lyricist Name is required" }),
    ipiNumber: z.string().optional(),
    iprsNumber: z.enum(['yes', 'no']),
    role: z.string().nonempty({ message: "Role is required" }),
  })),
  composers: z.array(z.object({
    name: z.string().nonempty({ message: "Composer Name is required" }),
    ipiNumber: z.string().optional(),
    iprsNumber: z.enum(['yes', 'no']),
    role: z.string().nonempty({ message: "Role is required" }),
  }))
});
