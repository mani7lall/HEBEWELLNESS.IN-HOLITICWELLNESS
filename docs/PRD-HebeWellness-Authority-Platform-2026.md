# Product Requirements Document (PRD)
# Hebe Wellness — Authority Health & Wellness Platform (2026+)

Date: 2026-03-30  
Owner: Product / Growth / Medical Editorial / Engineering  
Current stack: Next.js (App Router) + React + MDX + Tailwind

---

## 1) Executive Summary

Hebe Wellness already has the visual language and “interactive tools + protocols + research index” direction needed for a modern authority site. What it *doesn’t* yet have (and what Google + users increasingly demand for health/YMYL content) is an explicit, verifiable trust and clinical-safety system: documented editorial standards, author identity, medical review, evidence quality grading, update lifecycle, conflict-of-interest disclosure, and “safety gating” on risky topics.

This PRD proposes evolving Hebe into a **knowledge-graph-driven health authority platform** that combines:

- **Encyclopedic, citation-first content** (conditions, biomarkers, supplements, behaviors, labs, protocols).
- **Interactive tools + calculators** that are reproducible, explainable, and exportable.
- **Evidence transparency** (study cards, evidence grades, recency, guideline alignment).
- **Medical integrity & compliance** (clinician signoff, review dates, safety disclaimers).
- **Future-facing UX** (personalization, dashboards, AI-assisted navigation with strict safety guardrails).

> Important: “Outranking every site” cannot be guaranteed (rankings depend on competition, algorithm changes, brand signals, and user behavior). This PRD is designed to maximize the probability of earning durable topical authority and being cited/selected by both users and modern search/AI systems.

---

## 2) Strategic Context: What “Authority” Means in 2026

### 2.1 YMYL + E‑E‑A‑T is the moat for health
Google explicitly treats health/medical content as high stakes (“Your Money or Your Life”). Their Search Quality Rater Guidelines emphasize **reputation + trust + evidence quality + clear responsibility** for content and the site overall. (Search Quality Rater Guidelines, “General Guidelines September 11, 2025”).  
Source: https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf

### 2.2 “Review dates” and content lifecycle are a trust signal
The NHS design system recommends review dates and a content lifecycle; for health content it specifically calls out clinician signoff when clinical content changes.  
Source: https://service-manual.nhs.uk/design-system/patterns/know-that-a-page-is-up-to-date

### 2.3 “Medically reviewed” must be a process, not a badge
Healthline describes medical review as expert evaluation + source verification + ensuring currency vs guidelines/recalls/approvals, and publishes how their medical affairs team supports credibility.  
Source: https://www.healthline.com/health/medically-reviewed-content

### 2.4 The “AI layer” is now table-stakes—but must be clinically safe
Pfizer’s “Health Answers” illustrates a mainstream pattern: AI summarization with explicit non-diagnosis and “not a substitute for medical advice,” optional personalization, and source-based summaries.  
Source: https://healthanswers.pfizer.com/pages/nynm-big-deal

---

## 3) Competitive Benchmarking (2026 patterns to emulate)

This is not a “copy these websites” list; it’s a set of **repeatable authority patterns** used by leading health publishers and health systems.

### 3.1 Authority patterns (what to copy)

**A) Credibility & governance**
- Named authors with credentials; persistent author pages.
- Clear editorial policy + medical review policy + correction policy.
- Review dates and visible update history.
- Conflict-of-interest / funding disclosure.

**B) Evidence transparency**
- Primary sources (peer-reviewed, guidelines) clearly cited.
- “What we know / what we don’t” framing.
- Evidence strength grading and “recency score.”

**C) Topic clusters + internal linking**
- Condition pages connect to symptoms, causes, diagnosis, treatment, prevention.
- Interventions link to mechanisms, dosing ranges, side effects, interactions.
- Glossary anchors and definition tooltips across the site.

**D) Utility & interactivity**
- Calculators, trackers, decision trees, printable checklists.
- Personalized “next steps” and follow-up content plans.

**E) Safety / risk gating**
- Hard warnings on drug-like topics, contraindications, pregnancy, pediatrics, emergency symptoms.
- “See a clinician now” triggers.

### 3.2 Sites/products that exemplify these patterns

- **NHS**: systematic review-date pattern + clinician signoff for clinical changes.  
  https://service-manual.nhs.uk/design-system/patterns/know-that-a-page-is-up-to-date
- **Healthline**: published medical review workflow and “what medically reviewed means”.  
  https://www.healthline.com/health/medically-reviewed-content
- **Cleveland Clinic Health Essentials** (health system publisher): demonstrates health-system authority + clinician authorship, strong internal taxonomy (benchmark for trust architecture).  
  https://health.clevelandclinic.org
- **Pfizer Health Answers**: “AI health info” with explicit non-diagnosis positioning (benchmark for AI-safety UX).  
  https://healthanswers.pfizer.com/pages/nynm-big-deal

---

## 4) Current Hebe Wellness: Strengths & Gaps (from codebase audit)

### 4.1 Strengths
- Strong visual brand and modern UI conventions.
- Already has “authority primitives”: **Protocols**, **Research Library**, **Glossary**, **Tools**, **Blog/Intelligence**.
- Interactive experiences exist (calculators, quizzes, tools).

### 4.2 High-risk gaps (blockers for durable authority)
- **No explicit editorial governance**: no published “How we write, review, and update health content.”
- **No author identity system**: no author pages, credentials, or reviewer registry as first-class content.
- **Hardcoded “research” + incomplete links**: PubMed links and PMIDs appear partially placeholder; conclusions are displayed without evidence grading.
- **Potentially unsafe claims**: protocols mention prescription drugs / peptides / dosing and “violent” claims without visible clinical safety gating.
- **Trust-breaking UX**: “email to receive PDF” flows appear UI-only (no verified delivery, no privacy disclosures).
- **No platform-level SEO primitives**: sitemap/robots/structured data system not present.
- **Encoding/typography issues**: “â€¢” artifacts indicate text encoding problems in UI components.

---

## 5) Vision & Positioning

### 5.1 Product vision
Build the internet’s most useful, evidence-transparent wellness OS: an authority knowledge base + interactive tooling that helps people **understand**, **measure**, and **act safely**—with verifiable editorial quality.

### 5.2 Positioning statement
Hebe Wellness is the “evidence-first longevity and metabolic performance authority” that turns complex research into **explainable actions**, while publishing the **sources, uncertainty, and safety constraints**.

### 5.3 Differentiators
1. **Evidence cards and evidence grades** on every health claim.
2. **Knowledge graph**: conditions ↔ biomarkers ↔ interventions ↔ studies ↔ protocols.
3. **Interactive toolchain**: calculators + trackers + “protocol builder” connected to the knowledge graph.
4. **Clinical safety UX**: contraindications, red flags, and escalation logic.
5. **AI navigator** that only answers with citations and safety constraints.

---

## 6) Target Users & Jobs-to-be-Done (JTBD)

### Personas
- **The Optimizer (longevity / performance)**: wants measurable outcomes, protocols, and tracking.
- **The Skeptic**: wants “show me the sources,” what’s proven vs speculative.
- **The Busy Professional**: wants quick, safe next steps and checklists.
- **The Clinician/Coach**: wants clear references, printable summaries, and patient-safe explanations.

### JTBD
- “Help me understand if this intervention is worth it—and what the risks are.”
- “Give me a safe protocol with prerequisites, contraindications, and measurable markers.”
- “Summarize the science and show me the primary sources.”
- “Turn my goals into a plan I can follow daily/weekly.”

---

## 7) Success Metrics (North Star + supporting KPIs)

### North Star
**Qualified returning users completing high-intent journeys** (e.g., tool completion → evidence page → protocol checklist → save/export).

### KPI categories
- **Trust**: % pages with author + reviewer + review date; correction turnaround time; “report an issue” engagement.
- **Content authority**: topical coverage completeness per cluster; internal link density; citations per page.
- **SEO**: non-branded organic sessions; topical keyword share; crawl efficiency; index coverage.
- **Engagement**: time-to-value, repeat visits, saved items, tool completions.
- **Performance**: Core Web Vitals pass rate; p95 INP/LCP/CLS.
- **Accessibility**: WCAG 2.2 AA audit pass rate; keyboard-only usability.

---

## 8) Information Architecture (IA) — “Authority at scale”

### Top-level nav (proposed)
- **Conditions** (encyclopedia)
- **Interventions** (supplements, behaviors, therapies, medications — with strong safety gating)
- **Biomarkers & Labs**
- **Protocols** (goal-based, evidence-graded)
- **Tools** (calculators + trackers + planners)
- **Research Library** (study cards + collections)
- **Glossary**
- **About** (editorial policy, medical review board, corrections, transparency, privacy)

### URL design principles
- Stable, human-readable slugs (no date in URL unless news).
- Every “entity” has one canonical page.
- Cluster hubs (“Sleep,” “Metabolic health,” “Inflammation,” “Hormones”) that link out to entities.

---

## 9) Content Model (Knowledge Graph)

Define content as entities with typed relationships (not just blog posts).

### Entity types
- **Condition** (e.g., Insulin resistance)
- **Symptom**
- **Biomarker/Lab** (e.g., hs-CRP, ApoB)
- **Intervention**
  - supplement
  - lifestyle
  - therapy/device
  - medication (high risk; strict guardrails)
- **Protocol** (a structured plan)
- **Study** (PubMed/DOI + structured metadata)
- **Guideline** (clinical guideline + date + issuing org)
- **Author / Reviewer**

### Relationship examples
- Condition → associated biomarkers
- Biomarker → improved by interventions
- Intervention → supported by studies + guidelines
- Protocol → requires prerequisites + monitoring biomarkers

### Evidence representation
Each claim attaches:
+- Primary sources (study/guideline)
+- Evidence grade (A/B/C/D) + explanation
+- Recency score (e.g., last guideline update, last review date)
+- Population applicability (age/sex, pregnancy, conditions)
+- Risk and contraindications

---

## 10) Core Features (Requirements)

### 10.1 Trust & Governance Layer (P0)

**Requirements**
- Dedicated pages:
  - Editorial policy
  - Medical review process
  - Corrections policy
  - Advertising/affiliate disclosure (if applicable)
  - Privacy policy + data use
- Author system:
  - Author pages with credentials, bio, disclosures
  - Reviewer pages with credentials, license/verification approach
- Page-level trust UI:
  - “Written by”, “Medically reviewed by”, “Last reviewed”, “Next review due”
  - “Sources” section with primary citations
  - “Report an issue” link (creates a ticket)

**Acceptance criteria**
- 100% of YMYL pages show author + review metadata.
- Review dates follow a documented lifecycle (inspired by NHS process).  
  https://service-manual.nhs.uk/design-system/patterns/know-that-a-page-is-up-to-date

### 10.2 Research Library 2.0 (P0 → P1)

**Requirements**
- Replace hardcoded study list with a Study entity model.
- Study cards include:
  - PMID/DOI, year, study type, population, intervention dose, duration, outcomes
  - Limitations and conflicts
  - Link to PubMed/Journal
- “Collections” (curated):
  - Sleep
  - Metabolic health
  - Inflammation
  - Longevity pathways

**Acceptance criteria**
- 100% study cards have working source links.
- Every protocol claim links to supporting study/guideline entities.

### 10.3 Protocol System (P0 → P2)

**Requirements**
- Convert protocols from static cards to structured templates:
  - goal, prerequisites, steps, dosing ranges (if applicable), monitoring, stop conditions
  - contraindications (pregnancy, meds, conditions)
  - “red flag” symptoms → immediate medical care CTA
- Evidence grade per protocol component.
- Printable/exportable protocol checklist (PDF + plain text).

**Safety gating**
- Any medication-like intervention triggers:
  - “Not medical advice” + consult clinician
  - warnings about interactions
  - mandatory “eligibility screen”

**Acceptance criteria**
- Every protocol page has “Safety” section with contraindications and escalation guidance.

### 10.4 Tools & Calculators (P0 → P2)

**Requirements**
- Standard tool template:
  - explainable formula
  - assumptions
  - recommended ranges by population
  - downloadable summary
- Save/share results (account optional):
  - “Save to dashboard” (requires sign-in)
  - “Export PDF”
- “Next best actions” linking to relevant interventions, biomarkers, protocols.

**Acceptance criteria**
- Tools never claim to diagnose or replace clinical testing.
- Each tool output links to sources or guideline references where possible.

### 10.5 Glossary as a platform primitive (P0)

**Requirements**
- Glossary terms become reusable “definition tooltips” across all content.
- Each term:
  - short definition
  - deeper explanation
  - related terms
  - references where needed

**Acceptance criteria**
- Any high-jargon page has auto-suggested glossary terms.

### 10.6 AI “Hebe Navigator” (P1 → P3)

**Goal**
Help users traverse content and get summaries **only when citations exist**, with strong medical-safety constraints.

**Requirements**
- Retrieval-first: AI answers must quote/point to Hebe sources and primary references.
- Safety rules:
  - no diagnosis
  - no emergency advice (always escalate)
  - no dosing advice for prescriptions unless it’s strictly a summary of guidelines + “consult clinician”
- UI:
  - “Sources used” list
  - “Uncertainty / limitations”
  - “When to see a clinician”

**Benchmark**
Pfizer’s public positioning for AI health info illustrates the baseline UX expectations.  
https://healthanswers.pfizer.com/pages/nynm-big-deal

---

## 11) Editorial Workflow (Operations Requirement)

### 11.1 Roles
- Writer (science journalist / domain writer)
- Medical reviewer (clinician or subject-matter expert)
- Fact checker / research assistant
- Editor (style + structure)

### 11.2 Workflow stages
1. Brief → entity/topic map (where does this page sit in the graph?)
2. Draft with citations (primary sources first)
3. Fact check + evidence grade
4. Medical review (if YMYL clinical content)
5. Publish with review metadata
6. Lifecycle:
   - periodic review
   - version history
   - corrections

### 11.3 Review dates / lifecycle
Adopt a visible “review date” and planned lifecycle similar to NHS guidance; for clinical changes require clinician signoff.  
Source: https://service-manual.nhs.uk/design-system/patterns/know-that-a-page-is-up-to-date

### 11.4 “Medically reviewed” definition
Publish a clear page describing what medical review includes (expert evaluation + source verification + keeping content current).  
Benchmark source: https://www.healthline.com/health/medically-reviewed-content

---

## 12) SEO & Discoverability Requirements

### 12.1 Technical SEO (P0)
- `robots.txt` and `sitemap.xml` generation.
- Canonicals and metadata templates per entity.
- Structured data strategy:
  - Article / WebPage schemas
  - Author markup
  - Organization markup
  - Medical-specific schemas where appropriate (carefully; avoid spammy over-markup)

### 12.2 Topical authority strategy (P0 → P2)
- Build “topic clusters” that are complete:
  - hub page → subtopics → entities → tools/protocols
- Internal linking rules:
  - every entity links to related entities (graph edges)
  - every tool links to explanation pages and protocols
- SERP intent coverage:
  - “Know” pages (encyclopedia)
  - “Do” pages (tools)
  - “Compare” pages (intervention comparisons with evidence grades)

### 12.3 AI search readiness (P1 → P3)
- Make content “quoteable”:
  - clear summaries
  - definitions
  - evidence tables
- Ensure pages have crisp, verifiable “best answer” blocks, plus citations.
- Be prepared for publisher control debates and opt-outs (varies by jurisdiction).

---

## 13) UX/UI Requirements (Modern authority feel)

### 13.1 Design principles
- “Science-forward, calm authority” (reduce aggressive language on clinical pages).
- Progressive disclosure:
  - quick summary
  - safety and red flags
  - evidence deep dive
- Accessibility-first:
  - WCAG 2.2 AA compliance baseline.  
    Source: https://www.w3.org/TR/WCAG22/

### 13.2 Key UI patterns
- Evidence cards (study type, strength, outcomes, limitations).
- “Safety at a glance” panels.
- Interactive tables (dose ranges, populations, contraindications).
- Inline glossary tooltips.
- “Save / Export / Share” everywhere.

---

## 14) Non-Functional Requirements (NFRs)

### Performance
- Target pass on Core Web Vitals (INP responsiveness is a modern focus metric).
- Prefer server components for content-heavy pages; minimize client-only rendering for SEO-critical content.

### Security & privacy
- If collecting health profiles or tool outputs: publish clear privacy policy and data retention.
- If collecting “health data” in regulated contexts: evaluate HIPAA applicability; avoid storing sensitive data until compliance plan is ready.

### Reliability
- Audit all outbound links (PubMed, journals) for correctness; add link health monitoring.

---

## 15) Technical Architecture (Recommended)

### P0 architecture (fast, pragmatic)
- Keep Next.js App Router.
- Move content from route-level MDX scattered pages into a content system:
  - MDX in `src/content` with frontmatter
  - a content indexer (build-time) for entities + relationships
- Add search:
  - lightweight local index (small site) or Algolia/Meilisearch (scale).
- Add analytics and event tracking (privacy-respecting).

### P1+ (scale to “authority platform”)
- Introduce a headless CMS or structured content store for entities (optional; depends on team workflow).
- Add user accounts for saved dashboards and exports.
- Add RAG layer for AI navigator (with strict guardrails + citations).

---

## 16) Roadmap (Phased Delivery)

### Phase 0 (2–4 weeks): Authority foundation
- Editorial policy + medical review policy + corrections + privacy pages.
- Author/reviewer system + page-level trust metadata.
- Fix encoding issues (“â€¢”) and trust-breaking UI-only “email sent” flows.
- Add sitemap/robots + basic structured data templates.

### Phase 1 (4–8 weeks): Knowledge graph MVP
- Convert Blog/Research/Protocols into structured entities with relationships.
- Research Library 2.0 (real study cards + collections).
- Glossary tooltips sitewide.
- Protocol pages with safety gating + evidence grades.

### Phase 2 (8–16 weeks): Interactive authority
- Tool standardization + dashboards + exports.
- Personalization (goal-based onboarding → recommended clusters/tools/protocols).
- Community Q&A (moderated) or “Ask an Expert” (scheduled).

### Phase 3 (16+ weeks): Future layer
- AI Hebe Navigator (citations + safety).
- Wearables integration (Apple Health / Oura / etc.) if strategy supports it.
- Partnerships (clinics, labs) with transparent disclosures.

---

## 17) Risks & Mitigations

### Medical risk (highest)
**Risk**: Users interpret protocols as medical advice; medication/peptide content creates harm exposure.  
**Mitigation**: safety gating, clinician review, disclaimers, contraindications, “see a clinician” escalations, conservative language, content scope boundaries.

### Trust risk
**Risk**: “email PDF sent” without actually sending; missing privacy/disclosure erodes credibility.  
**Mitigation**: implement real delivery or remove claims; publish policies; add audit logs/versioning.

### SEO risk
**Risk**: Thin/duplicative content, weak entity architecture, lack of reputation signals.  
**Mitigation**: knowledge graph model + author pages + evidence transparency + internal linking.

### AI risk
**Risk**: hallucinations, unsafe guidance.  
**Mitigation**: retrieval-first, citations required, refuse unsafe queries, emergency escalation.

---

## 18) Definition of Done (for “Authority-ready”)

Hebe qualifies as an “authority-grade” health platform when:
- Every YMYL page includes author + reviewer + review date + sources.
- Protocols and tools show safety constraints and do not imply diagnosis.
- Research Library sources are accurate and complete.
- Site has a clear editorial governance story and corrections process.
- Accessibility audits meet WCAG 2.2 AA for critical flows.
- Performance is consistently strong and measurable.

---

## 19) Appendix — Reference Sources Used

- Google Search Quality Rater Guidelines (Sept 11, 2025):  
  https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf
- NHS “Know that a page is up to date” (review dates + lifecycle):  
  https://service-manual.nhs.uk/design-system/patterns/know-that-a-page-is-up-to-date
- Healthline: what medically reviewed means + medical review process benchmark:  
  https://www.healthline.com/health/medically-reviewed-content
- Pfizer Health Answers (AI health info benchmark):  
  https://healthanswers.pfizer.com/pages/nynm-big-deal
- W3C WCAG 2.2 (accessibility standard):  
  https://www.w3.org/TR/WCAG22/
