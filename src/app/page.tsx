'use client'
import React, { useState } from "react";
import './PetCafe.css';


export default function PetCafePrereleasePage() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="page-wrapper">
<header className="page-header">
  <div className="nav-bar">
    <button className="burger-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
    <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
      <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
      <li><a href="#alpha-explanations" onClick={() => setMenuOpen(false)}>Alpha Explanations</a></li>
      <li><a href="#download" onClick={() => setMenuOpen(false)}>Download</a></li>
      <li><a href="#controls" onClick={() => setMenuOpen(false)}>Controls</a></li>
      <li><a href="#cheats" onClick={() => setMenuOpen(false)}>Cheats</a></li>
      <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
    </ul>
  </div>

  <h1 className="page-title">🐇🐈🐕 PetCafe Prereleases</h1>
</header>
      <main className="page-card">
        <section className="section" id="about">
          <h2 className="section-title">ℹ️ About</h2>
          <p className="text-gray-600">In PetCafe, you run restaurants and cafés where all characters — your character, employees, and customers — are adorable animals. Prepare dishes, expand your estate, upgrade appliances, discover recipes, keep things clean, and build a culinary empire.</p>
        </section>

        <section className="section" id="alpha-explanations">
          <h2 className="section-title">💡 Alpha Explanations</h2>
          <div className="space-y-3">
            <h3 className="section-subtitle">Managing Furnishing</h3>
            <p className="text-gray-600">You can decorate restaurants only after manually closing them on the overworld. Use the context menu → <b>Manage</b>. Re-open the restaurant for customers to enter again.</p>

            <h3 className="section-subtitle">Employees</h3>
            <p className="text-gray-600">Hired employees appear in the restaurant management view. Clicking their portrait assigns them (portrait greys out). Employees prepare and deliver dishes.</p>

            <h3 className="section-subtitle">Repairing</h3>
            <p className="text-gray-600">Machines wear down with use, indicated by a wrench/screwdriver icon. Low-health machines are slower. Switch to repair action (<kbd>Q</kbd>/<kbd>E</kbd>) and hit with your wrench (<kbd>left alt</kbd>).</p>

            <h3 className="section-subtitle">Cleaning</h3>
            <p className="text-gray-600">Dirt is visual-only. Clean it using the broom (<kbd>Q</kbd>/<kbd>E</kbd> + hold <kbd>left alt</kbd>). Vacuum robots can also clean. Bad weather increases dirt accumulation.</p>

            <h3 className="section-subtitle">Reputation</h3>
            <p className="text-gray-600">Satisfied customers increase reputation; long waits decrease it. Every 10 reputation grants a skill point. Points are never lost.</p>

            <h3 className="section-subtitle">Skills</h3>
            <p className="text-gray-600">Skills are partially implemented. Open the skill tree with <kbd>T</kbd> in a restaurant.</p>
          </div>
        </section>

        <section className="section" id="download">
          <h2 className="section-title">⬇️ Download</h2>
          <div className="faq-content text-gray-600 space-y-2">
            <p>You can download early versions of PetCafe from <a href="https://github.com/Sudden-Drop/PetCafe-Prerelease/releases" className="page-link">GitHub</a>. Versions you download there are free of charge and yours to keep.</p>
            <h3 className="section-subtitle">Not sure which to pick?</h3>
            <p>In general, just take the latest release from the page linked above. Each has an <strong>Assets</strong> section with binaries for various operating systems. For example, when you are using Windows and you want to play version 0.0.1-alpha5, go to the <strong>Assets</strong> section of <strong>Release 0.0.1-alpha5</strong> and download <strong>0.0.1-alpha5-windows.zip</strong>, unpack it and run the <strong>.exe</strong> inside it.</p>
            <h3 className="section-subtitle">Version Types</h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-600">
              <li><code>x.y.z-alpha…</code> — very early versions with bugs, missing features, and placeholder assets. Do not expect this to feel like a polished game!</li>
              <li><code>x.y.z-beta…</code> — more stable versions. Still a lot of bugs.</li>
            </ul>
          </div>
        </section>

        <section className="section" id="controls">
          <h2 className="section-title">🎮 Controls</h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-600">
            <li><kbd>W</kbd> – move up</li>
            <li><kbd>A</kbd> – move left</li>
            <li><kbd>S</kbd> – move down</li>
            <li><kbd>D</kbd> – move right</li>
            <li><kbd>space</kbd> – primary action</li>
            <li><kbd>left alt</kbd> – secondary action</li>
            <li><kbd>Q</kbd> – previous secondary action</li>
            <li><kbd>E</kbd> – next secondary action</li>
            <li><kbd>T</kbd> – skill tree (restaurant only)</li>
            <li><kbd>enter</kbd> – cheat menu (overworld only)</li>
          </ul>
        </section>

        <section className="section" id="cheats">
          <h2 className="section-title">🛠️ Cheats</h2>
          <table className="cheats-table">
            <thead>
              <tr>
                <th>Cheat</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>robin hood</code></td><td>+1000 gold</td></tr>
              <tr><td><code>&lt;3me</code></td><td>+1000 reputation</td></tr>
              <tr><td><code>ikea</code></td><td>Unlock all furnishing</td></tr>
              <tr><td><code>letitsnow</code></td><td>Snow</td></tr>
              <tr><td><code>vitamin d</code></td><td>Sunny weather</td></tr>
              <tr><td><code>pour decision</code></td><td>Rain</td></tr>
              <tr><td><code>hi noon</code></td><td>Set time to 12:00</td></tr>
              <tr><td><code>bye noon</code></td><td>Set time to 00:00</td></tr>
              <tr><td><code>gimme</code></td><td>Add 10 coffee beans & 10 apples</td></tr>
              <tr><td><code>thumper</code></td><td>Add a bunny employee</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section" id="faq">
          <h2 className="section-title">❓ FAQ</h2>
          <div className="faq-content text-gray-600 space-y-2">
            <h3 className="section-subtitle">I Found a Problem With One of The Prerelease Versions</h3>
            <p>Please open a <a className="page-link" href="https://github.com/Sudden-Drop/PetCafe-Prerelease/issues/new/choose">bug report</a> and include which version you were using and your OS. You can also message on <a className="page-link" href="https://discord.gg/TNKhRJB87V">Discord</a>.</p>


            <h3 className="section-subtitle">When Will PetCafe Be Fully Released?</h3>
            <p>When it is done™️. I'm developing solo while working full time, and will release only when I feel players will enjoy it.</p>


            <h3 className="section-subtitle">Is There a Steam Page Already?</h3>
            <p>Not yet. Steam requires a $100 fee per game, so I'll add a page once the game reaches beta. Updates will continue here and on <a className="page-link" href="https://discord.gg/TNKhRJB87V">Discord</a>.</p>


            <h3 className="section-subtitle">Is There a Roadmap?</h3>
            <p>No strict roadmap yet. I have many ideas and will document features as they are developed or if players request them.</p>


            <h3 className="section-subtitle">How Much Will PetCafe Cost?</h3>
            <p>The target full release price is below $20. This keeps the game affordable while covering development costs. There will be no loot boxes, microtransactions, or similar mechanics.</p>
          </div>
        </section>
      </main>
    </div>
  );
}