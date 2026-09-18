import { SubmitButton } from './widgets/SubmitButton/SubmitButton'
import { Counter } from './widgets/Counter/Counter'
import { ToggleSwitch } from './widgets/ToggleSwitch/ToggleSwitch'
import { NotificationBadge } from './widgets/NotificationBadge/NotificationBadge'
import { ProfileCard } from './widgets/ProfileCard/ProfileCard'
import { Tooltip } from './widgets/Tooltip/Tooltip'
import { PriceTag } from './widgets/PriceTag/PriceTag'
import './App.css'

function App() {
  return (
    <>
      <header className="intro">
        <h1>Widget Gallery</h1>
        <p>
          Six small widgets, six small bugs. Pick your assigned issue, fix it
          on a branch, and open a PR from the template.
        </p>
      </header>

      <section className="grid">
        <article className="card">
          <h2>Waitlist form</h2>
          <p>Enter an email and click "Join waitlist".</p>
          <div className="card-body">
            <SubmitButton />
          </div>
        </article>

        <article className="card">
          <h2>Counter</h2>
          <p>Click "+1" a few times.</p>
          <div className="card-body">
            <Counter />
          </div>
        </article>

        <article className="card">
          <h2>Toggle switch</h2>
          <p>Click the switch to turn it on.</p>
          <div className="card-body">
            <ToggleSwitch />
          </div>
        </article>

        <article className="card">
          <h2>Notification badge</h2>
          <p>24 unread notifications should look urgent.</p>
          <div className="card-body">
            <NotificationBadge count={24} />
          </div>
        </article>

        <article className="card">
          <h2>Profile card</h2>
          <p>The avatar photo should load.</p>
          <div className="card-body">
            <ProfileCard
              name="Amara Singh"
              avatarUrl="https://i.pravatar.cc/80?img=47"
            />
          </div>
        </article>

        <article className="card">
          <h2>Info tooltip</h2>
          <p>Hover the "i" icon.</p>
          <div className="card-body">
            <Tooltip />
          </div>
        </article>
      </section>

      <header className="intro reference-intro">
        <h1>Reference: a fully documented function</h1>
        <p>
          Not a task — no bug, nothing to fix. Open{' '}
          <code>src/widgets/PriceTag/formatDiscountedPrice.ts</code> to see
          what a complete TSDoc comment looks like before you write your own.
        </p>
      </header>

      <section className="grid">
        <article className="card">
          <h2>Price tag</h2>
          <p>
            <code>formatDiscountedPrice</code> is fully documented with
            TSDoc — <code>@param</code>, <code>@returns</code>,{' '}
            <code>@remarks</code>, and <code>@example</code>.
          </p>
          <div className="card-body">
            <PriceTag />
          </div>
        </article>
      </section>
    </>
  )
}

export default App
