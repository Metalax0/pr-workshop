import { formatDiscountedPrice } from './formatDiscountedPrice'
import styles from './PriceTag.module.css'

const ORIGINAL_PRICE_CENTS = 1999
const DISCOUNT_PERCENT = 25

export function PriceTag() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.original}>
        {formatDiscountedPrice(ORIGINAL_PRICE_CENTS, 0)}
      </span>
      <span className={styles.discounted}>
        {formatDiscountedPrice(ORIGINAL_PRICE_CENTS, DISCOUNT_PERCENT)}
      </span>
      <span className={styles.badge}>-{DISCOUNT_PERCENT}%</span>
    </div>
  )
}
