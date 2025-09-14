
// --- Part 2: Reusable Animation Functions with Parameters, Return Values, and Scope ---
// Global variable to count triggered animations
let animationCount = 0;

/**
 * Triggers a CSS animation by adding a class to an element.
 * @param {string} elementId - The id of the element to animate.
 * @param {string} animationClass - The CSS class to add for animation.
 * @returns {boolean} - True if animation was triggered, false otherwise.
 */
function triggerAnimation(elementId, animationClass) {
    const el = document.getElementById(elementId); // local scope
    if (!el) return false;
    el.classList.remove(animationClass);
    void el.offsetWidth;
    el.classList.add(animationClass);
    animationCount++;
    return true;
}

/**
 * Returns the number of times animations have been triggered.
 * Demonstrates global vs local scope.
 */
function getAnimationCount() {
    // animationCount is global, count is local
    let count = animationCount;
    return count;
}

// --- Part 3: Fade-in Box Animation ---
function fadeInBox() {
    triggerAnimation('fade-box', 'fade-in');
}

// Heartbeat emoji animation control
function startHeartbeat() {
    const emoji = document.getElementById('heartbeat-emoji');
    if (emoji) emoji.classList.add('heartbeat');
}

function stopHeartbeat() {
    const emoji = document.getElementById('heartbeat-emoji');
    if (emoji) emoji.classList.remove('heartbeat');
}

// --- Emoji Bounce Animation with Color Change ---
document.addEventListener('DOMContentLoaded', function() {
    const emoji = document.getElementById('emoji-anim');
    const btn = document.getElementById('emoji-anim-btn');
    let colored = false;
    if (emoji && btn) {
        btn.addEventListener('click', function() {
            emoji.classList.remove('emoji-bounce');
            void emoji.offsetWidth;
            emoji.classList.add('emoji-bounce');
            // Toggle color class
            colored = !colored;
            if (colored) {
                emoji.classList.add('colored');
            } else {
                emoji.classList.remove('colored');
            }
        });
        emoji.addEventListener('animationend', function() {
            emoji.classList.remove('emoji-bounce');
        });
        emoji.addEventListener('click', function() {
            console.log('react');
        });
    }
});
// --- End Emoji Bounce Animation with Color Change ---

const box = document.getElementById('box-two');

function startAnimation() {
    box.classList.add('animate');
}

function stopAnimation() {
    box.classList.remove('animate');
}
