import z from 'zod'

const createReviewZodSchema = z.object({
  content: z.string({ required_error: 'Review content is required' }),
  rating: z
    .number()
    .int()
    .positive()
    .refine((val) => val >= 1 && val <= 5, {
      message: 'Review rating must be between 1 and 5'
    }),
  user: z.string({ required_error: 'Review must belong to a user' }),
  tour: z.string({ required_error: 'Review must belong to a tour' })
})

type TCreateReviewInput = z.TypeOf<typeof createReviewZodSchema>

export { createReviewZodSchema }
export type { TCreateReviewInput }
