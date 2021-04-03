import styles from './button.module.css'

export function Button() {
  return (
      <div>
            <button
                style={{color:'red'}}
                type="button"
                // Note how the "error" class is accessed as a property on the imported
                // `styles` object.
                className={styles.error}
            >
            Destroy
            </button>
            <style jsx>{`
                p {
                color: blue;
                }
                div {
                background: red;
                }
                @media (max-width: 600px) {
                div {
                    background: blue;
                }
                }
            `}</style>
      </div>
  )
}