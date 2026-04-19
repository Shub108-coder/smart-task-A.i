# smart-task-A.i
<section class="page">
    <div class="page-header">
        <div>
            <h1 class="page-title">SmartTask AI: Intelligent Priority Orchestration</h1>
            <p class="page-sub">Project Documentation & Technical Overview</p>
        </div>
        <div class="header-right">
            <span class="header-badge">v1.0.0 — Hackathon Build</span>
        </div>
    </div>
    <div class="card" style="margin-bottom: 2rem; border-left: 4px solid var(--accent);">
        <h3 class="card-title">Problem Statement</h3>
        <p class="alert-text" style="margin-top: 10px;">
            Modern teams struggle with static task lists that fail to adapt to changing deadlines and business values. 
            SmartTask AI solves this by implementing an <strong>AI-driven multi-factor priority scoring system</strong> 
            that dynamically sequences tasks in real-time.
        </p>
    </div>
    <div class="grid-2">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Functional Goals</h3>
            </div>
            <ul class="alert-list" style="list-style: none; padding-left: 0;">
                <li class="alert-item">
                    <div class="alert-icon accent">✓</div>
                    <div class="alert-text">Multi-factor priority scoring (Deadline, Effort, Impact)</div>
                </li>
                <li class="alert-item">
                    <div class="alert-icon accent">✓</div>
                    <div class="alert-text">Real-time dynamic task reordering</div>
                </li>
                <li class="alert-item">
                    <div class="alert-icon accent">✓</div>
                    <div class="alert-text">Actionable execution sequencing for users</div>
                </li>
                <li class="alert-item">
                    <div class="alert-icon accent">✓</div>
                    <div class="alert-text">Adaptive learning from task completion patterns</div>
                </li>
            </ul>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">User Roles</h3>
            </div>
            <div class="bottleneck-list">
                <div class="bottleneck-item">
                    <span class="badge badge-progress">Team Member</span>
                    <span class="bottleneck-name">Follows AI-optimized task order</span>
                </div>
                <div class="bottleneck-item">
                    <span class="badge badge-medium">Faculty Mentor</span>
                    <span class="bottleneck-name">Monitors workload & adjusts inputs</span>
                </div>
                <div class="bottleneck-item">
                    <span class="badge badge-score">Subject Teacher</span>
                    <span class="bottleneck-name">Analyzes org-wide productivity trends</span>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Technological Architecture</h3>
        </div>
        <div class="table-wrap">
            <table>
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Technology</th>
                    <th>Implementation Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bold accent">Frontend</td>
                    <td class="mono">React + Vite</td>
                    <td>SaaS-style dashboard with Chart.js analytics</td>
                  </tr>
                  <tr>
                    <td class="bold accent">Backend</td>
                    <td class="mono">Node.js + Express</td>
                    <td>RESTful API with AI scoring logic middleware</td>
                  </tr>
                  <tr>
                    <td class="bold accent">Database</td>
                    <td class="mono">MongoDB</td>
                    <td>Document-based storage for flexible task schemas</td>
                  </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
