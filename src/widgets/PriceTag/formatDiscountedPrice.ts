/**
 * Formats a price after applying a percentage discount, for display in the UI.
 *
 * @param priceInCents - The original price, in integer cents (e.g. `1999` for $19.99).
 * Must be non-negative.
 * @param discountPercent - The discount to apply, from 0 to 100. Values outside
 * that range are clamped rather than throwing.
 * @param currencySymbol - The symbol to prefix the formatted price with. Defaults to `"$"`.
 * @returns The discounted price formatted like `"$17.99"`, rounded to the nearest cent.
 *
 * @remarks
 * Rounding is "round half up" (e.g. 1799.5 cents -> $18.00), not banker's rounding,
 * to match how the checkout service rounds order totals. If you change the rounding
 * here, checkout totals and this display will disagree.
 *
 * @example
 * ```ts
 * formatDiscountedPrice(1999, 10)      // "$17.99"
 * formatDiscountedPrice(1999, 150)     // "$0.00"  (discount clamped to 100%)
 * formatDiscountedPrice(500, 20, "€")  // "€4.00"
 * ```
 */
export function formatDiscountedPrice(
  priceInCents: number,
  discountPercent: number,
  currencySymbol = '$',
): string {
  const clampedDiscount = Math.min(100, Math.max(0, discountPercent))
  const discountedCents = priceInCents * (1 - clampedDiscount / 100)
  const rounded = Math.round(discountedCents)
  const dollars = (rounded / 100).toFixed(2)

  return `${currencySymbol}${dollars}`
}
