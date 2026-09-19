// ==============================================================================
// Ramaiah School of Public Health (RSPH) - PRISM Academic RAG Knowledge Base
// Grounded in Approved MPH & MHA Curricula, Gordis Epidemiology (7th Ed),
// Greene Medical Terminology for Healthcare Professions, Medical English (OER),
// Park's PSM (28th Ed), IPHS 2022 Guidelines, Daniel Biostatistics, ICMR Bioethics (2017)
// ==============================================================================

const kb = [
  {
    id: "incidence_vs_prevalence",
    topic: "Incidence vs. Prevalence & Morbidity Metrics",
    category: "Epidemiology Core",
    source: "Gordis Epidemiology (7th Ed.) Ch. 3 & WHO Basic Epidemiology Ch. 2",
    keywords: ["incidence", "prevalence", "cumulative incidence", "incidence rate", "incidence density", "point prevalence", "period prevalence", "person-time", "morbidity", "attack rate", "p=i*d", "steady state", "incidence vs prevalence", "difference between incidence and prevalence"],
    synonyms: ["new cases", "existing cases", "risk", "bathtub model", "morbidity measures", "disease frequency"],
    takeaway: "Incidence measures etiology, risk, and preventive efficacy; Prevalence measures total disease burden required for hospital staffing, bed capacity, and budgetary planning.",
    followups: ["Case-Control vs Cohort", "Prevalence effect on PPV", "The Iceberg Phenomenon"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">EPIDEMIOLOGY CORE</span>
        <h3 class="tutor-title">Incidence vs. Prevalence: Mathematical &amp; Clinical Foundations</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Core Conceptual Principles</div>
        <p>In epidemiology, disease frequency is quantified through two fundamentally different dimensions:</p>
        <ul>
          <li><strong>Incidence (Risk / Rate of Occurrence):</strong> Measures the number of <em>NEW cases</em> that develop in a population at risk over a specified observation period. It captures the rapid transition from a healthy state to disease.</li>
          <li><strong>Prevalence (Existing Burden):</strong> Measures the proportion of <em>ALL existing cases</em> (both newly diagnosed and pre-existing chronic cases) present in a total population at a specific point in time (Point Prevalence) or across an interval (Period Prevalence).</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📊 Mathematical Formulations &amp; Units</div>
        <ul>
          <li><strong>Cumulative Incidence (Incidence Risk):</strong> <code>Cumulative Incidence = (New Cases during Time T) / (Disease-Free Population at Baseline)</code>. Dimensionless proportion ranging from 0.0 to 1.0.</li>
          <li><strong>Incidence Rate (Incidence Density):</strong> <code>Incidence Density = (New Cases) / (Total Person-Time at Risk)</code>. Expressed in true rate units (e.g., 14.2 cases per 1,000 person-years).</li>
          <li><strong>Point Prevalence:</strong> <code>Prevalence = (Total Number of Existing Cases at Time t) / (Total Population at Time t)</code>. Expressed as a percentage or per 1,000 population.</li>
        </ul>
      </div>
      <div class="tutor-callout">
        <strong>🛁 The Bathtub Steady-State Relationship:</strong><br>
        Under steady-state demographic conditions (stable population and migration balance):<br>
        <code>Prevalence ≈ Incidence × Average Disease Duration (P = I × D)</code><br>
        <em>The Clinical Paradox:</em> When medical advancements introduce life-saving non-curative therapies (e.g. ART for HIV or insulin for Type 1 Diabetes), patients survive much longer (duration <em>D</em> expands). Consequently, <strong>prevalence increases dramatically even when incidence remains completely unchanged or falls</strong>!
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title green">🏥 Public Health &amp; Healthcare Management Applications</div>
        <ul>
          <li><strong>MPH / Epidemiological Application:</strong> Calculating vaccine efficacy (comparing cumulative incidence in vaccinated vs. unvaccinated cohorts) and identifying causative etiological risk factors.</li>
          <li><strong>MHA / Hospital Administrator Application:</strong> Sizing inpatient bed capacity, hemodialysis stations, pharmaceutical inventories, and OPEX budgets based on total prevalent disease burdens.</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Never use prevalence to assess causality because prevalence is confounded by survival; always use incidence to evaluate disease etiology and prevention programs.
      </div>
      <div class="tutor-citation">📚 Gordis Epidemiology (7th Ed.) Chapter 3: Measuring Disease Occurrence | Park's PSM (28th Ed.) Chapter 2</div>
    `
  },
  {
    id: "epidemiological_triad_causation",
    topic: "The Epidemiological Triad, Web of Causation & Rothman's Pies",
    category: "Epidemiology Core",
    source: "Gordis Epidemiology (7th Ed.) Ch. 2 & Park's PSM (28th Ed.) Ch. 2",
    keywords: ["epidemiological triad", "agent host environment", "web of causation", "causal pies", "sufficient cause", "component cause", "necessary cause", "rothman", "causality", "vector", "transmission triangle"],
    synonyms: ["agent host environment", "causal models", "disease transmission", "rothman pies"],
    takeaway: "In Rothman's model, a necessary cause must be present in every sufficient pie; eliminating just one component cause breaks that entire causal pathway and prevents disease.",
    followups: ["Infectious Disease Transmission & R0", "4 Levels of Prevention", "Iceberg Phenomenon"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">EPIDEMIOLOGY CORE</span>
        <h3 class="tutor-title">The Epidemiological Triad &amp; Causal Architecture</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Core Conceptual Principles</div>
        <p>Disease does not occur in a biological vacuum. Epidemiologists map causality across three primary theoretical models:</p>
        <ul>
          <li><strong>The Epidemiological Triad:</strong> Infectious disease transmission requires the interplay of three vertices:
            <ul>
              <li><strong>Agent:</strong> Biological pathogen (bacterial, viral, parasitic), chemical toxin, or physical force.</li>
              <li><strong>Host:</strong> Human genetic susceptibility, age, immune status, nutritional level, and behavioral habits.</li>
              <li><strong>Environment:</strong> External sanitation, air quality, ambient temperature, housing density, and social networks.</li>
              <li><em>Vector / Vehicle:</em> An intermediary organism (e.g. <em>Aedes aegypti</em> in Dengue) or fomite bridging the agent and host.</li>
            </ul>
          </li>
          <li><strong>The Web of Causation (MacMahon &amp; Pugh):</strong> Chronic multi-factorial conditions (cardiovascular disease, Type 2 diabetes) arise from complex interconnected matrices of biological, economic, and environmental pathways rather than a solitary agent.</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📊 Rothman's Causal Pie Architecture</div>
        <ul>
          <li><strong>Sufficient Cause:</strong> A complete constellation of minimal conditions and events that inevitably initiates pathology (represented as a complete 360° pie).</li>
          <li><strong>Component Cause:</strong> Each individual slice of the causal pie (e.g. smoking, hypertension, ApoE4 allele, sedentary lifestyle).</li>
          <li><strong>Necessary Cause:</strong> A specific component cause that <em>must be present in every single sufficient causal pie</em> for that disease (e.g. <em>Mycobacterium tuberculosis</em> is necessary for TB; HIV is necessary for AIDS).</li>
        </ul>
      </div>
      <div class="tutor-callout">
        <strong>🎯 Public Health Prevention Implication:</strong><br>
        To prevent disease, public health professionals do NOT need to eliminate every component cause. By completely eliminating just <em>one</em> component slice (e.g. removing stagnant water to eradicate vector breeding), the entire causal pie becomes incomplete, and disease cannot occur through that pathway!
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> A cause is necessary if disease cannot occur without it; it is sufficient if disease inevitably occurs when it is present. Public health targets component causes to dismantle sufficient pathways.
      </div>
      <div class="tutor-citation">📚 Gordis Epidemiology (7th Ed.) Chapter 2 &amp; 14: Transmission &amp; Causality | Park's PSM (28th Ed.) Chapter 2</div>
    `
  },
  {
    id: "transmission_dynamics_r0_herd_immunity",
    topic: "Transmission Dynamics, R0 & The Herd Immunity Threshold",
    category: "Epidemiology Core",
    source: "Gordis Epidemiology (7th Ed.) Ch. 2 & Park's PSM (28th Ed.) Ch. 5",
    keywords: ["r0", "basic reproduction number", "reproduction rate", "rt", "herd immunity", "herd immunity threshold", "hit", "incubation period", "generation time", "secondary attack rate", "transmission dynamics"],
    synonyms: ["reproduction number", "outbreak dynamics", "herd immunity formula", "critical vaccination coverage"],
    takeaway: "Outbreaks expand when effective reproduction number Rt > 1; achieving the Herd Immunity Threshold (HIT = 1 - 1/R0) halts sustained transmission in a community.",
    followups: ["Outbreak Investigation & Epidemic Curves", "Incidence vs Prevalence", "4 Levels of Prevention"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">EPIDEMIOLOGY CORE</span>
        <h3 class="tutor-title">Transmission Dynamics, R0 &amp; Herd Immunity Mathematics</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Core Conceptual Principles</div>
        <ul>
          <li><strong>Basic Reproduction Number (R0):</strong> The average number of secondary infectious cases produced by a single typical index case introduced into a totally susceptible, uninfected population. (e.g. Measles R0 = 12–18; SARS-CoV-2 ancestral R0 ≈ 2.5–3.5).</li>
          <li><strong>Effective Reproduction Number (Rt):</strong> The actual real-time reproduction number in a population that has partial immunity (natural or vaccinated) or active non-pharmacological interventions. Formula: <code>Rt = R0 × s</code> (where <em>s</em> is the proportion of susceptible hosts).
            <ul>
              <li>If <code>Rt &gt; 1</code>: Outbreak grows exponentially.</li>
              <li>If <code>Rt = 1</code>: Disease reaches endemic equilibrium.</li>
              <li>If <code>Rt &lt; 1</code>: Transmission declines and the outbreak dies out.</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📊 Mathematical Formulas</div>
        <ul>
          <li><strong>Herd Immunity Threshold (HIT):</strong> The minimum proportion of immune individuals needed to prevent sustained community transmission:
            <br><code>HIT = 1 - (1 / R0)</code>
          </li>
          <li><strong>Critical Vaccination Coverage (Vc):</strong> Accounting for vaccine effectiveness (E):
            <br><code>Vc = HIT / Vaccine Effectiveness = [1 - (1 / R0)] / E</code>
            <br><em>Worked Example (Measles with R0 = 15, Vaccine Efficacy = 95%):</em>
            <br><code>HIT = 1 - (1/15) = 93.3%</code>; <code>Vc = 0.933 / 0.95 = 98.2%</code> required coverage.
          </li>
          <li><strong>Secondary Attack Rate:</strong> <code>SAR = (Cases among contacts within 1 incubation period) / (Total exposed susceptible contacts) × 100</code>.</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> High R0 pathogens require near-universal population vaccination coverage (>95%) to protect vulnerable individuals who cannot be immunized.
      </div>
      <div class="tutor-citation">📚 Gordis Epidemiology (7th Ed.) Chapter 2 | Park's PSM (28th Ed.) Chapter 5: Epidemiology of Communicable Diseases</div>
    `
  },
  {
    id: "epidemiological_study_designs",
    topic: "Epidemiological Study Designs: Hierarchy & Comparative Selection",
    category: "Epidemiology Core",
    source: "Gordis Epidemiology (7th Ed.) Ch. 7–10 & WHO Basic Epidemiology Ch. 3",
    keywords: ["study designs", "epidemiological designs", "observational studies", "experimental studies", "cross-sectional", "case-control", "cohort", "rct", "randomized controlled trial", "ecological study", "hierarchy of study designs"],
    synonyms: ["study architecture", "research design selection", "analytical epidemiology"],
    takeaway: "Select Case-Control for rare diseases (yields Odds Ratios); select Cohort for rare exposures (yields true Incidence and Relative Risk); select RCTs for causal efficacy.",
    followups: ["Case-Control Studies & Odds Ratio", "Cohort Studies & Relative Risk", "The 2x2 Screening Matrix"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">EPIDEMIOLOGY CORE</span>
        <h3 class="tutor-title">Taxonomy &amp; Selection of Epidemiological Study Designs</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Structural Hierarchy of Epidemiological Designs</div>
        <p>Epidemiological study designs fall into two overarching methodological categories:</p>
        <ul>
          <li><strong>Descriptive Studies:</strong> Describe distribution by Person, Place, and Time. Formulates hypotheses without testing causality (e.g. Case Reports, Case Series, Ecological Correlational studies).</li>
          <li><strong>Analytical Observational Studies:</strong> Tests hypotheses and investigates causal associations without investigator intervention:
            <ul>
              <li><strong>Cross-Sectional (Prevalence Study):</strong> Exposure and outcome assessed simultaneously at a single snapshot in time. Low cost, fast, but suffers from <em>temporal ambiguity</em> (cannot determine which came first).</li>
              <li><strong>Case-Control Study:</strong> Starts with disease outcome (Cases vs Controls) and looks retrospectively backward at past exposures. Optimal for rare diseases and long latency.</li>
              <li><strong>Cohort Study:</strong> Starts with exposure status (Exposed vs Unexposed) and follows disease-free individuals forward in time to observe incident disease. Optimal for rare exposures.</li>
            </ul>
          </li>
          <li><strong>Experimental Interventional Studies:</strong> Investigator actively assigns exposure/treatment. <strong>Randomized Controlled Trials (RCTs)</strong> represent the gold standard for clinical efficacy because randomization neutralizes confounding.</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📊 Comparative Matrix Across Major Designs</div>
        <ul>
          <li><strong>Suitability for Rare Diseases:</strong> Case-Control (Excellent) | Cohort (Poor/Impractical).</li>
          <li><strong>Suitability for Rare Exposures:</strong> Case-Control (Poor) | Cohort (Excellent).</li>
          <li><strong>Ability to Measure True Incidence:</strong> Cohort (Directly measured) | Case-Control (Cannot measure).</li>
          <li><strong>Primary Measure of Association:</strong> Case-Control (Odds Ratio) | Cohort (Relative Risk).</li>
          <li><strong>Major Vulnerable Biases:</strong> Case-Control (Recall &amp; Selection Bias) | Cohort (Loss-to-Follow-up Attrition Bias).</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> If you are investigating a rare disease or an outbreak with long latency, design a Case-Control study. If investigating a rare chemical/occupational exposure, design a Cohort study.
      </div>
      <div class="tutor-citation">📚 Gordis Epidemiology (7th Ed.) Chapters 7, 8, 9, 10 | WHO Basic Epidemiology (2nd Ed.) Chapter 3</div>
    `
  },
  {
    id: "case_control_odds_ratio",
    topic: "Case-Control Studies & The Odds Ratio (OR)",
    category: "Epidemiology Core",
    source: "Gordis Epidemiology (7th Ed.) Ch. 8 & PHC503A Course Specifications",
    keywords: ["case control", "odds ratio", "or calculation", "rare disease", "selection of controls", "recall bias", "ad/bc", "contingency table for case control", "berkson bias"],
    synonyms: ["odds ratio formula", "retrospective case control", "matching in case control"],
    takeaway: "The Odds Ratio (ad/bc) is the ratio of the odds of exposure among diseased cases to the odds of exposure among controls; when disease prevalence < 5%, OR closely approximates Relative Risk.",
    followups: ["Cohort Studies & Relative Risk", "2x2 Screening Matrix", "Epidemiological Study Designs"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">EPIDEMIOLOGY CORE</span>
        <h3 class="tutor-title">Case-Control Architecture &amp; The Odds Ratio (OR)</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Methodological Architecture</div>
        <p>A Case-Control study is an outcome-driven observational design:</p>
        <ul>
          <li><strong>Step 1:</strong> Identify subjects with the condition of interest (<strong>Cases</strong>).</li>
          <li><strong>Step 2:</strong> Identify appropriate comparison subjects without the condition (<strong>Controls</strong>) sampled from the exact same source population.</li>
          <li><strong>Step 3:</strong> Retrospectively ascertain exposure histories in both groups via interviews, clinical records, or biological archives.</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📊 2x2 Table &amp; Odds Ratio Formula</div>
        <p>Set up the 2x2 contingency matrix:</p>
        <ul>
          <li>Cases: <code>a</code> (Exposed), <code>c</code> (Unexposed)</li>
          <li>Controls: <code>b</code> (Exposed), <code>d</code> (Unexposed)</li>
          <li><strong>Odds of exposure among Cases:</strong> <code>a / c</code></li>
          <li><strong>Odds of exposure among Controls:</strong> <code>b / d</code></li>
          <li><strong>Odds Ratio (Cross-Product Ratio):</strong> <code>OR = (a / c) / (b / d) = (a × d) / (b × c)</code></li>
        </ul>
      </div>
      <div class="tutor-callout">
        <strong>⚠️ The Rare Disease Assumption:</strong><br>
        Because cases and controls are selected arbitrarily by the investigator, you CANNOT calculate true disease incidence in a case-control study. However, when the disease is rare in the general population (prevalence &lt; 5%), the <strong>Odds Ratio serves as an extremely close approximation of the Relative Risk (OR ≈ RR)</strong>!
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title red">⚠️ Critical Biases in Case-Control Designs</div>
        <ul>
          <li><strong>Recall Bias:</strong> Cases with severe illness ruminate on their past and report past exposures far more thoroughly than healthy controls.</li>
          <li><strong>Berkson's Bias:</strong> Hospital-based control selection bias due to differential admission rates between diseases and exposures.</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> In case-control studies, never report 'risk' or 'incidence'—only report the Odds Ratio (OR = ad/bc) and 95% Confidence Intervals.
      </div>
      <div class="tutor-citation">📚 Gordis Epidemiology (7th Ed.) Chapter 8 | PHC503A Course Specifications</div>
    `
  },
  {
    id: "cohort_relative_risk_attributable_risk",
    topic: "Cohort Studies, Relative Risk (RR) & Attributable Risk (AR)",
    category: "Epidemiology Core",
    source: "Gordis Epidemiology (7th Ed.) Ch. 9 & PHC503A",
    keywords: ["cohort study", "relative risk", "risk ratio", "rr", "attributable risk", "ar", "population attributable risk", "par", "prospective cohort", "retrospective cohort", "incidence in exposed"],
    synonyms: ["relative risk calculation", "risk difference", "cohort follow up", "etiological fraction"],
    takeaway: "Relative Risk (Ie / Iu) quantifies the strength of etiological association; Attributable Risk (Ie - Iu) quantifies the public health impact of eliminating that exposure.",
    followups: ["Case-Control Studies & Odds Ratio", "Incidence vs Prevalence", "2x2 Screening Matrix"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">EPIDEMIOLOGY CORE</span>
        <h3 class="tutor-title">Cohort Study Design, Relative Risk (RR) &amp; Attributable Risk (AR)</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Methodological Architecture</div>
        <p>In a Cohort study, the investigator begins with a disease-free baseline cohort categorized into two exposure groups:</p>
        <ul>
          <li><strong>Exposed Group:</strong> Individuals possessing the risk factor (e.g. tobacco smokers).</li>
          <li><strong>Unexposed Group:</strong> Disease-free individuals without the risk factor (e.g. non-smokers).</li>
          <li>The groups are monitored longitudinally over time (person-years) to document the development of incident disease.</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📊 Mathematical Metrics &amp; Calculations</div>
        <ul>
          <li><strong>Incidence in Exposed (Ie):</strong> <code>a / (a + b)</code></li>
          <li><strong>Incidence in Unexposed (Iu):</strong> <code>c / (c + d)</code></li>
          <li><strong>Relative Risk (Risk Ratio):</strong> <code>RR = Ie / Iu</code>
            <ul>
              <li><code>RR = 1.0</code>: No association between exposure and disease.</li>
              <li><code>RR &gt; 1.0</code>: Exposure increases risk (harmful exposure).</li>
              <li><code>RR &lt; 1.0</code>: Exposure decreases risk (protective factor, e.g. RR = 0.30 indicates 70% risk reduction).</li>
            </ul>
          </li>
          <li><strong>Attributable Risk (Risk Difference):</strong> <code>AR = Ie - Iu</code> (Quantifies the absolute excess risk attributable directly to the exposure).</li>
          <li><strong>Population Attributable Risk (PAR):</strong> <code>PAR = (Itotal - Iu) / Itotal</code> (Proportion of disease in the entire community that would be prevented if the exposure were completely eradicated).</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Relative Risk (RR) tells clinicians the strength of an individual's causal risk; Attributable Risk (AR/PAR) tells public health directors which interventions deliver the largest population-level disease reductions.
      </div>
      <div class="tutor-citation">📚 Gordis Epidemiology (7th Ed.) Chapter 9: Cohort Studies | PHC503A Course Specifications</div>
    `
  },
  {
    id: "screening_2x2_matrix",
    topic: "The 2x2 Screening Matrix: Sensitivity, Specificity, PPV & NPV",
    category: "Epidemiology Core",
    source: "Gordis Epidemiology (7th Ed.) Ch. 5 & Park's PSM (28th Ed.) Ch. 3",
    keywords: ["2x2 table", "screening matrix", "sensitivity", "specificity", "positive predictive value", "ppv", "negative predictive value", "npv", "snout", "spin", "screening tests", "gold standard"],
    synonyms: ["diagnostic accuracy", "screening formulas", "true positive rate", "false positive rate"],
    takeaway: "Sensitivity and Specificity are fixed biological properties of a test kit; PPV and NPV change dramatically based on disease prevalence in the tested population.",
    followups: ["Prevalence effect on PPV", "Incidence vs Prevalence", "4 Levels of Prevention"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">EPIDEMIOLOGY CORE</span>
        <h3 class="tutor-title">Diagnostic Screening &amp; The 2x2 Contingency Matrix</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Core Conceptual Framework</div>
        <p>When evaluating a new screening or diagnostic test against an accepted <strong>Gold Standard</strong> (definitive biopsy, culture, or imaging), patients are classified into a 2x2 contingency matrix:</p>
        <ul>
          <li><strong>True Positives (TP - cell a):</strong> Sick patients correctly flagged positive by the test.</li>
          <li><strong>False Positives (FP - cell b):</strong> Healthy patients incorrectly flagged positive by the test (Type I error).</li>
          <li><strong>False Negatives (FN - cell c):</strong> Sick patients missed by the test and flagged negative (Type II error).</li>
          <li><strong>True Negatives (TN - cell d):</strong> Healthy patients correctly flagged negative by the test.</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📊 Mathematical Metrics &amp; Clinical Mnemonics</div>
        <ul>
          <li><strong>Sensitivity:</strong> <code>TP / (TP + FN) = a / (a + c)</code>
            <br><em>Clinical Meaning:</em> The test's ability to correctly identify patients who actually have the disease.
            <br><em>Mnemonic:</em> <strong>SnNOut</strong> — A test with high <strong>S</strong>e<strong>n</strong>sitivity, when <strong>N</strong>egative, rules <strong>Out</strong> the diagnosis.
          </li>
          <li><strong>Specificity:</strong> <code>TN / (TN + FP) = d / (b + d)</code>
            <br><em>Clinical Meaning:</em> The test's ability to correctly identify patients who do NOT have the disease.
            <br><em>Mnemonic:</em> <strong>SpPIn</strong> — A test with high <strong>Sp</strong>ecificity, when <strong>P</strong>ositive, rules <strong>In</strong> the diagnosis.
          </li>
          <li><strong>Positive Predictive Value (PPV):</strong> <code>TP / (TP + FP) = a / (a + b)</code>. The probability that a patient who tests positive is truly diseased.</li>
          <li><strong>Negative Predictive Value (NPV):</strong> <code>TN / (FN + TN) = d / (c + d)</code>. The probability that a patient who tests negative is truly disease-free.</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> For mass screening, prioritize high Sensitivity (to avoid missing sick cases); for confirmatory verification before aggressive treatment, prioritize high Specificity (to avoid treating healthy patients).
      </div>
      <div class="tutor-citation">📚 Gordis Epidemiology (7th Ed.) Chapter 5: Comparing Diagnostic and Screening Tests</div>
    `
  },
  {
    id: "prevalence_effect_on_ppv",
    topic: "The Mathematical Rule of Disease Prevalence on PPV",
    category: "Epidemiology Core",
    source: "Gordis Epidemiology (7th Ed.) Ch. 5 (Prevalence and Predictive Value)",
    keywords: ["prevalence on ppv", "prevalence effect", "why ppv drops", "bayes theorem screening", "false positives in screening", "screening asymptomatic population", "positive predictive value prevalence"],
    synonyms: ["bayes theorem in screening", "screening low prevalence", "false positive paradox"],
    takeaway: "In low-prevalence screening settings (<1%), even tests with 99% specificity yield PPVs < 50% because false positives outnumber true positives.",
    followups: ["The 2x2 Screening Matrix", "Incidence vs Prevalence", "Iceberg Phenomenon"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">EPIDEMIOLOGY CORE</span>
        <h3 class="tutor-title">Why Disease Prevalence Controls Positive Predictive Value (PPV)</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The Fundamental Principle</div>
        <p>A widespread misconception among junior clinicians and hospital administrators is that Positive Predictive Value (PPV) is a fixed test kit specification. In reality:</p>
        <ul>
          <li><strong>Sensitivity and Specificity</strong> are fixed biological characteristics of the diagnostic test kit.</li>
          <li><strong>PPV and NPV</strong> depend heavily on the <strong>prevalence of disease in the population being tested</strong>.</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title red">📊 The Low-Prevalence Screening Paradox: A Worked Proof</div>
        <p>Consider a state-of-the-art diagnostic test with <strong>99% Sensitivity</strong> and <strong>99% Specificity</strong> deployed across 10,000 individuals in two different clinical settings:</p>
        <ul>
          <li><strong>Scenario A: Asymptomatic General Population (Prevalence = 0.1% or 10 cases in 10,000):</strong>
            <ul>
              <li>True Positives: 99% of 10 = ~10 patients.</li>
              <li>True Negatives: 99% of 9,990 = 9,890 healthy individuals.</li>
              <li>False Positives: 1% of 9,990 = <strong>100 healthy individuals falsely flagged positive!</strong></li>
              <li><code>PPV = TP / (TP + FP) = 10 / (10 + 100) = 9.1%</code>!</li>
              <li><em>Astonishing Reality:</em> More than 90% of positive test results are false alarms!</li>
            </ul>
          </li>
          <li><strong>Scenario B: Tertiary Hospital Referral Clinic (Prevalence = 30% or 3,000 cases in 10,000):</strong>
            <ul>
              <li>True Positives: 99% of 3,000 = 2,970 patients.</li>
              <li>False Positives: 1% of 7,000 = 70 individuals.</li>
              <li><code>PPV = 2,970 / (2,970 + 70) = 97.7%</code>!</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Mass unselected screening of healthy low-risk populations generates massive waves of false-positive results, triggering unnecessary biopsies, anxiety, and cost. Screen high-risk enriched cohorts first.
      </div>
      <div class="tutor-citation">📚 Gordis Epidemiology (7th Ed.) Chapter 5: Relationship between Prevalence and Predictive Value</div>
    `
  },
  {
    id: "hai_surveillance_device_rates",
    topic: "Hospital Acquired Infection (HAI) Surveillance & Device Rates",
    category: "Epidemiology & Hospital Admin",
    source: "CDC NHSN Guidelines, Park's PSM Ch. 19 & HAC504C",
    keywords: ["hai", "hospital acquired infection", "cauti", "clabsi", "vap", "ssi", "infection control", "device days", "catheter associated uti", "central line infection", "nabh infection", "hospital epidemiology"],
    synonyms: ["nosocomial infection", "device associated infections", "hospital infection control"],
    takeaway: "HAIs are tracked using standardized device-day denominators (e.g. CAUTIs per 1,000 catheter-days) rather than raw patient counts to accurately reflect biological exposure risk.",
    followups: ["NABH Accreditation & Patient Safety", "Outbreak Investigation & Epidemic Curves", "POSDCORB in Hospitals"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">EPIDEMIOLOGY &amp; HOSPITAL ADMIN</span>
        <h3 class="tutor-title">Hospital-Acquired Infection (HAI) Surveillance Metrics</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Hospital Epidemiology Foundation</div>
        <p>A Healthcare-Associated Infection (HAI) is an infection acquired during inpatient care that was neither present nor incubating upon hospital admission (manifesting $\ge 48$ hours post-admission).</p>
        <p>Hospital quality managers never use raw patient admission counts for device-related infections. Instead, they apply <strong>person-time device-day denominators</strong> to reflect true cumulative biological exposure.</p>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📊 Standardized NHSN / NABH Benchmark Formulas</div>
        <ul>
          <li><strong>CAUTI Rate (Catheter-Associated Urinary Tract Infection):</strong><br>
            <code>CAUTI Rate = (Total Number of CAUTIs / Total Indwelling Urinary Catheter-Days) × 1,000</code>
          </li>
          <li><strong>CLABSI Rate (Central Line-Associated Bloodstream Infection):</strong><br>
            <code>CLABSI Rate = (Total Number of CLABSIs / Total Central Line-Days) × 1,000</code>
          </li>
          <li><strong>VAP Rate (Ventilator-Associated Pneumonia):</strong><br>
            <code>VAP Rate = (Total Number of VAPs / Total Mechanical Ventilator-Days) × 1,000</code>
          </li>
          <li><strong>SSI Rate (Surgical Site Infection):</strong><br>
            <code>SSI Rate = (Total Number of Inpatient SSIs / Total Surgical Procedures in Category) × 100</code>
          </li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title green">🏥 Prevention Bundles in Quality Management</div>
        <p>Evidence-based "care bundles" prevent over 60% of device infections: sterile barrier insertion, daily clinical review of line necessity, prompt removal of unneeded lines, and chlorhexidine gluconate skin antisepsis.</p>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> The single most effective managerial intervention to reduce CAUTIs and CLABSIs is performing daily audits to remove invasive lines the moment they are no longer clinically mandatory.
      </div>
      <div class="tutor-citation">📚 CDC National Healthcare Safety Network (NHSN) Surveillance Manual | NABH 5th Edition Standards</div>
    `
  },
  {
    id: "outbreak_investigation_epidemic_curves",
    topic: "Outbreak Investigation & Epidemic Curves",
    category: "Epidemiology Core",
    source: "Gordis Epidemiology (7th Ed.) Ch. 2 & CDC Field Epidemiology Manual",
    keywords: ["outbreak investigation", "epidemic curve", "epi curve", "point source", "propagated outbreak", "continuous common source", "secondary cases", "index case", "field epidemiology"],
    synonyms: ["outbreak steps", "epidemic curve shapes", "disease clustering"],
    takeaway: "Epidemic curves reveal the transmission modality: Point-Source shows a sharp unimodal peak; Continuous shows a plateau; Propagated shows progressively taller secondary peaks.",
    followups: ["Infectious Disease Transmission & R0", "Epidemiological Triad", "Incidence vs Prevalence"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">EPIDEMIOLOGY CORE</span>
        <h3 class="tutor-title">10-Step Outbreak Investigation &amp; Epidemic Curves</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The 10 Systematic Steps of Field Investigation</div>
        <ol>
          <li><strong>Prepare for fieldwork:</strong> Assemble interdisciplinary team, PPE, sampling kits.</li>
          <li><strong>Establish the existence of an outbreak:</strong> Confirm current case rates exceed normal endemic baseline.</li>
          <li><strong>Verify the clinical/laboratory diagnosis:</strong> Ensure proper diagnostic testing.</li>
          <li><strong>Construct an explicit Case Definition:</strong> Standardize criteria (Definite, Probable, Suspect).</li>
          <li><strong>Active case finding &amp; line listing:</strong> Record demographic, exposure, and clinical data.</li>
          <li><strong>Perform Descriptive Epidemiology:</strong> Characterize cases by Time (Epi Curve), Place (Spot Map), and Person.</li>
          <li><strong>Develop causal hypotheses:</strong> Identify likely vehicle, agent, and exposure route.</li>
          <li><strong>Evaluate hypotheses analytically:</strong> Execute a retrospective Case-Control or Cohort study.</li>
          <li><strong>Implement immediate containment control measures:</strong> Close contaminated facilities, recall contaminated food, isolate carriers.</li>
          <li><strong>Communicate findings &amp; formal reporting:</strong> Publish official report for stakeholders.</li>
        </ol>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📊 Interpreting Epidemic Curve Morphologies</div>
        <ul>
          <li><strong>Point-Source Outbreak:</strong> Steep upward slope, single prominent peak, sharp downward decline; all cases occur within a single incubation period (e.g. food poisoning from contaminated wedding catering).</li>
          <li><strong>Continuous Common-Source Outbreak:</strong> Prolonged plateau without sharp drop; exposure persists over extended durations (e.g. Broad Street pump cholera outbreak).</li>
          <li><strong>Propagated (Person-to-Person) Outbreak:</strong> Series of successive, progressively taller peaks separated by intervals approximately equal to the pathogen's incubation period (e.g. Measles, Norovirus, Influenza).</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Never wait for analytical studies to finish before taking containment measures; institute infection control, line recalls, or facility sanitization the moment a plausible hazard is identified.
      </div>
      <div class="tutor-citation">📚 Gordis Epidemiology (7th Ed.) Chapter 2 | CDC Field Epidemiology Manual</div>
    `
  },
  {
    id: "iceberg_phenomenon",
    topic: "The Iceberg Phenomenon of Disease & The Population Paradigm",
    category: "Public Health Foundations",
    source: "Park's PSM (28th Ed.) Ch. 2 & Oxford Textbook of Global Public Health",
    keywords: ["iceberg phenomenon", "iceberg of disease", "visible tip", "submerged iceberg", "subclinical reservoir", "diagnostic threshold", "clinical vs public health", "population health paradigm"],
    synonyms: ["iceberg model", "hidden disease", "subclinical disease reservoir"],
    takeaway: "Hospitals treat only the visible tip of the clinical iceberg; public health screening and prevention penetrate beneath the waterline to neutralize the vast submerged community reservoir.",
    followups: ["4 Levels of Prevention", "Social Determinants of Health", "Incidence vs Prevalence"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">PUBLIC HEALTH FOUNDATIONS</span>
        <h3 class="tutor-title">The Iceberg Phenomenon of Disease</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The Classic Epidemiological Metaphor</div>
        <p>In population health, disease in a community resembles an iceberg floating in the ocean:</p>
        <ul>
          <li><strong>The Visible Tip Above the Waterline:</strong> Represents clinically apparent, symptomatic patients who seek outpatient care, present to emergency rooms, or occupy hospital inpatient beds. This is the exclusive focus of conventional curative clinical medicine.</li>
          <li><strong>The Submerged Mass Beneath the Waterline:</strong> Represents the vast, uncounted reservoir of subclinical cases, unapparent or undiagnosed disease, asymptomatic carriers, and exposed individuals in the early pathogenesis phase residing in the community.</li>
          <li><strong>The Waterline:</strong> Represents the diagnostic threshold and access barriers of the healthcare delivery system. It fluctuates based on screening availability, diagnostic technology, and health insurance.</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">🏥 Real-World Health Systems Demonstration</div>
        <p><strong>Bangalore Hypertension Example:</strong> A tertiary hospital cardiothoracic department treats 1,500 diagnosed hypertensive patients experiencing heart failure and stroke (the visible tip). An RSPH community door-to-door screening camp across 60,000 neighborhood adults uncovers 8,200 individuals with blood pressures exceeding 150/95 mmHg who had never had their blood pressure measured. Leaving them untreated guarantees a massive surge of hospital admissions 5 years later.</p>
      </div>
      <div class="tutor-callout">
        <strong>⚠️ Exceptions to the Iceberg Phenomenon:</strong><br>
        Certain acute infections with near-100% clinical manifestation (e.g. Rabies, Measles, Tetanus) do NOT exhibit an iceberg phenomenon because almost all infected individuals manifest severe clinically obvious disease.
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Hospitals cannot solve community disease burdens alone. Healthcare managers and public health leaders must invest in decentralized screening to drain the submerged reservoir.
      </div>
      <div class="tutor-citation">📚 Park's Textbook of Preventive and Social Medicine (28th Ed.) Chapter 2: Concept of Health and Disease</div>
    `
  },
  {
    id: "four_levels_of_prevention",
    topic: "The 4 Levels of Prevention & Modes of Intervention",
    category: "Public Health Foundations",
    source: "Park's PSM (28th Ed.) Ch. 2 & PHC501A Course Specifications",
    keywords: ["levels of prevention", "primordial prevention", "primary prevention", "secondary prevention", "tertiary prevention", "health promotion", "specific protection", "early diagnosis", "disability limitation", "rehabilitation"],
    synonyms: ["four levels of prevention", "prevention taxonomy", "modes of intervention"],
    takeaway: "Primordial prevents risk factor emergence; Primary protects against disease when risk factors exist; Secondary catches early pathology via screening; Tertiary mitigates disability.",
    followups: ["The Iceberg Phenomenon", "IPHS 2022 Healthcare Architecture", "Ayushman Bharat & PM-JAY"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">PUBLIC HEALTH FOUNDATIONS</span>
        <h3 class="tutor-title">The Four Levels of Prevention &amp; Modes of Intervention</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The Chronological Prevention Continuum</div>
        <p>Disease prevention is organized chronologically along the natural history of disease:</p>
        <ol>
          <li><strong>1. Primordial Prevention:</strong>
            <ul>
              <li><em>Phase:</em> Before risk factors emerge in the population.</li>
              <li><em>Target:</em> Entire community via macro-policy, legislation, and environmental architecture.</li>
              <li><em>Interventions:</em> National 40% tax on sugar-sweetened beverages to prevent childhood obesity; building protected pedestrian bikeways; bans on trans-fats.</li>
            </ul>
          </li>
          <li><strong>2. Primary Prevention:</strong>
            <ul>
              <li><em>Phase:</em> Pre-pathogenesis phase (risk factors exist, but biological disease has not started).</li>
              <li><em>Modes of Intervention:</em>
                <ul>
                  <li><strong>Health Promotion:</strong> Nutrition counseling, lifestyle modification, health education.</li>
                  <li><strong>Specific Protection:</strong> Universal Immunization Programme (UIP) vaccines, chemoprophylaxis, iodized salt, distribution of condoms, PPE in hazardous industries.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>3. Secondary Prevention:</strong>
            <ul>
              <li><em>Phase:</em> Early pathogenesis phase (asymptomatic or subclinical disease present).</li>
              <li><em>Mode of Intervention:</em> <strong>Early Diagnosis and Prompt Treatment</strong>. Halts disease progression and prevents complications.</li>
              <li><em>Interventions:</em> Routine Pap smears for cervical dysplasia; mammography; blood pressure and blood glucose screening at Ayushman Arogya Mandirs; sputum microscopy for early pulmonary TB.</li>
            </ul>
          </li>
          <li><strong>4. Tertiary Prevention:</strong>
            <ul>
              <li><em>Phase:</em> Late pathogenesis phase (symptomatic clinical disease with anatomical/functional damage).</li>
              <li><em>Modes of Intervention:</em>
                <ul>
                  <li><strong>Disability Limitation:</strong> Intensive medical/surgical interventions to halt catastrophic sequelae (e.g. laser photocoagulation for diabetic retinopathy; intensive ICU care).</li>
                  <li><strong>Rehabilitation:</strong> Physical, psychological, and vocational training to restore functional autonomy (e.g. post-stroke physiotherapy; diabetic foot orthotics; cardiac rehab).</li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Primordial and primary prevention stop disease before it starts; secondary catches it early; tertiary prevents disability and restores dignity.
      </div>
      <div class="tutor-citation">📚 Park's PSM (28th Ed.) Chapter 2 | PHC501A Principles and Practice of Public Health</div>
    `
  },
  {
    id: "social_determinants_rainbow_model",
    topic: "Social Determinants of Health & The Dahlgren-Whitehead Model",
    category: "Public Health Foundations",
    source: "WHO Commission on Social Determinants of Health & Park's PSM Ch. 2",
    keywords: ["social determinants", "sdoh", "dahlgren whitehead", "rainbow model", "health equity", "health equality", "out of pocket expenditure", "oope", "catastrophic health expenditure", "structural determinants"],
    synonyms: ["dahlgren whitehead rainbow", "health inequalities", "upstream determinants"],
    takeaway: "Clinical care accounts for only ~20% of population health outcomes; social, economic, and environmental conditions account for the remaining 80%.",
    followups: ["4 Levels of Prevention", "IPHS 2022 Healthcare Architecture", "Ayushman Bharat & PM-JAY"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">PUBLIC HEALTH FOUNDATIONS</span>
        <h3 class="tutor-title">Social Determinants of Health (SDOH) &amp; Health Equity</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The Dahlgren-Whitehead Rainbow Architecture</div>
        <p>The Dahlgren-Whitehead Rainbow model conceptualizes health as shaped by five concentric layered determinants:</p>
        <ol>
          <li><strong>Biological Core:</strong> Age, sex, constitutional genetics (non-modifiable individual characteristics).</li>
          <li><strong>Individual Lifestyle Factors:</strong> Personal health behaviors including physical inactivity, tobacco consumption, alcohol abuse, and dietary patterns.</li>
          <li><strong>Social and Community Networks:</strong> Family cohesion, peer support, mutual aid, civic trust, and community solidarity.</li>
          <li><strong>Living and Working Conditions:</strong> Safe drinking water, basic sanitation, housing quality, working conditions, educational attainment, healthcare access, and unemployment.</li>
          <li><strong>Macro Socioeconomic, Cultural &amp; Environmental Conditions:</strong> Upstream structural factors including labor market policies, tax structures, civil rights, gender equality, and climate change.</li>
        </ol>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">⚖️ Health Equality vs. Health Equity</div>
        <ul>
          <li><strong>Health Equality:</strong> Providing identical resources to everyone regardless of baseline need (e.g. allocating the exact same health budget to an affluent metropolitan ward and an isolated tribal forest hamlet).</li>
          <li><strong>Health Equity:</strong> Allocating resources based on vulnerability and need so that everyone has a fair and just opportunity to achieve optimal health. Treating unequal groups equally perpetuates structural inequality.</li>
        </ul>
      </div>
      <div class="tutor-callout">
        <strong>💸 Out-of-Pocket Expenditure (OOPE) in India:</strong><br>
        In India, private out-of-pocket expenditure historically constituted over 45% of total healthcare spending. Catastrophic health expenditures push approximately 55 million citizens into poverty annually, underscoring the urgent need for financial protection mechanisms like PM-JAY.
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Improving clinical medicine without addressing clean water, housing, education, and nutrition is treating symptoms while ignoring the structural disease.
      </div>
      <div class="tutor-citation">📚 Dahlgren &amp; Whitehead (1991) Policies and Strategies to Promote Social Equity in Health | WHO CSDH Report</div>
    `
  },
  {
    id: "iphs_2022_three_tier_architecture",
    topic: "Indian Health System 3-Tier Architecture & IPHS 2022 Guidelines",
    category: "Health Systems & IPHS",
    source: "Indian Public Health Standards (IPHS 2022 Revision, MoHFW)",
    keywords: ["iphs 2022", "three tier health system", "sub centre", "phc", "chc", "district hospital", "ayushman arogya mandir", "primary secondary tertiary", "population norms iphs", "indian health system"],
    synonyms: ["indian healthcare hierarchy", "iphs norms", "sub centre phc chc"],
    takeaway: "India operates a standardized 3-tier delivery system: Ayushman Arogya Mandirs (3k-5k pop), PHCs (20k-30k pop), CHC First Referral Units (80k-120k pop), and District Hospitals.",
    followups: ["IPHS 2022 CHC & FRU Norms", "Ayushman Bharat & PM-JAY", "National Health Mission"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">HEALTH SYSTEMS &amp; IPHS</span>
        <h3 class="tutor-title">Indian 3-Tier Health System Architecture (IPHS 2022)</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The Three-Tier Decentralized Healthcare Delivery Hierarchy</div>
        <p>The revised Indian Public Health Standards (IPHS 2022) structure public healthcare delivery across three functional tiers:</p>
        <ul>
          <li><strong>Tier 1: Primary Level (Ayushman Arogya Mandir / Sub-Centre &amp; PHC):</strong>
            <ul>
              <li><strong>Sub-Health Centre (SHC) / Ayushman Arogya Mandir:</strong>
                <ul>
                  <li><em>Population Norms:</em> 5,000 in plains / 3,000 in hilly, tribal, or desert terrain.</li>
                  <li><em>Human Resources:</em> Community Health Officer (CHO - BSc Nursing/BAMS trained MLHP), Auxiliary Nurse Midwife (ANM), Multi-Purpose Worker (MPW-Male), supported by community ASHA workers.</li>
                  <li><em>Service Scope:</em> 12 Comprehensive Primary Health Care (CPHC) packages, 14 point-of-care rapid diagnostics, free essential medicines, e-Sanjeevani teleconsultation.</li>
                </ul>
              </li>
              <li><strong>Primary Health Centre (PHC):</strong>
                <ul>
                  <li><em>Population Norms:</em> 30,000 in plains / 20,000 in hilly/tribal areas. Acts as referral hub for 6 SHCs.</li>
                  <li><em>Human Resources:</em> MBBS Medical Officer (1-2), Staff Nurses (3-5), Pharmacist, Lab Technician.</li>
                  <li><em>Service Scope:</em> 24/7 basic emergency care, institutional deliveries, cold-chain immunization hub, 63 essential diagnostic tests, 63 essential drugs.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Tier 2: Secondary Level (CHC &amp; Sub-District Hospital):</strong>
            <ul>
              <li><strong>Community Health Centre (CHC):</strong> 80,000–1,20,000 population. 30 inpatient beds. Acts as the surgical First Referral Unit (FRU) with 4 core clinical specialists.</li>
              <li><strong>Sub-District Hospital (SDH):</strong> 50–100 beds bridging CHCs and District Hospitals.</li>
            </ul>
          </li>
          <li><strong>Tier 3: Tertiary Level (District Hospitals &amp; Medical Colleges):</strong>
            <ul>
              <li><strong>District Hospital (DH):</strong> 100 to 500+ beds at the district headquarters. Equipped with multi-specialty ICUs, HDUs, blood banks, dialysis suites, trauma units, and advanced imaging.</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Under IPHS 2022, 6 Sub-Centres feed into 1 PHC; 4 PHCs feed into 1 CHC First Referral Unit, which refers complex cases to the District Hospital.
      </div>
      <div class="tutor-citation">📚 MoHFW Indian Public Health Standards (IPHS) 2022 Guidelines: Executive Summary &amp; Volumes I–IV</div>
    `
  },
  {
    id: "iphs_2022_chc_fru_norms",
    topic: "IPHS 2022 CHC Norms: First Referral Unit (FRU) Mandate",
    category: "Health Systems & IPHS",
    source: "Indian Public Health Standards (IPHS 2022 Revision) - Volume III: CHC Guidelines",
    keywords: ["iphs chc", "fru norms", "first referral unit", "chc beds", "chc specialists", "community health centre norms", "emergency obstetric care", "c-section chc", "blood storage unit"],
    synonyms: ["chc specifications", "fru criteria", "community health centre staffing"],
    takeaway: "A Community Health Centre (CHC) is a 30-bed First Referral Unit (FRU) mandated to have 4 core specialists (Surgeon, Physician, Gynecologist, Pediatrician) and 24/7 emergency C-section capability.",
    followups: ["IPHS 2022 Three-Tier Architecture", "Ayushman Bharat & PM-JAY", "Healthcare Organizations as Complex Systems"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">HEALTH SYSTEMS &amp; IPHS</span>
        <h3 class="tutor-title">Community Health Centre (CHC) &amp; FRU Mandates under IPHS 2022</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Statutory Definition &amp; Population Coverage</div>
        <p>A Community Health Centre (CHC) serves as the secondary-level referral nexus for primary healthcare institutions:</p>
        <ul>
          <li><strong>Population Benchmark:</strong> 1,20,000 in plain areas / 80,000 in hilly, tribal, or backward desert terrain.</li>
          <li><strong>Referral Ratio:</strong> Exactly 4 Primary Health Centres (PHCs) refer upward to 1 CHC.</li>
          <li><strong>Inpatient Bed Capacity:</strong> Exactly <strong>30 inpatient beds</strong> (with male, female, and maternity separation).</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">🏥 The Three Essential Criteria of a First Referral Unit (FRU)</div>
        <p>To qualify as an operational First Referral Unit (FRU), a CHC must satisfy three non-negotiable operational requirements:</p>
        <ol>
          <li><strong>24/7 Emergency Obstetric Care (EmOC):</strong> Full capacity to perform emergency Caesarean sections, assisted instrumental deliveries, and manage eclampsia and post-partum hemorrhage.</li>
          <li><strong>24/7 Emergency Newborn &amp; Child Care:</strong> Fully staffed Special Newborn Care Unit (SNCU) or Newborn Stabilization Unit (NBSU).</li>
          <li><strong>Licensed Blood Storage Facility:</strong> Round-the-clock cold-chain blood banking or tie-ups with district blood centres.</li>
        </ol>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title green">👨‍⚕️ Mandatory Specialist Team (4 Core Specialists)</div>
        <ul>
          <li>1 General Surgeon (MS General Surgery)</li>
          <li>1 General Physician (MD General Medicine)</li>
          <li>1 Obstetrician / Gynecologist (MD/MS OBGYN)</li>
          <li>1 Pediatrician (MD Pediatrics / DCH)</li>
          <li><em>Supported by:</em> Anesthetist, Dental Surgeon, Eye Specialist, General Duty Medical Officers (GDMOs), and 10+ Staff Nurses.</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Without 24/7 Caesarean capacity, newborn care, and licensed blood storage, a CHC fails to meet statutory First Referral Unit (FRU) criteria.
      </div>
      <div class="tutor-citation">📚 IPHS 2022 Guidelines: Volume III - Community Health Centres | MoHFW FRU Operational Manual</div>
    `
  },
  {
    id: "ayushman_bharat_hwc_pmjay",
    topic: "Ayushman Bharat: Comprehensive Primary Care & PM-JAY",
    category: "Health Systems & Policy",
    source: "National Health Authority (NHA) & Park's PSM (28th Ed.) Ch. 19",
    keywords: ["ayushman bharat", "pmjay", "pradhan mantri jan arogya yojana", "health and wellness centres", "ayushman arogya mandir", "cphc", "5 lakh cover", "cashless hospitalization", "nha"],
    synonyms: ["pm-jay insurance", "ayushman bharat scheme", "universal health protection"],
    takeaway: "Ayushman Bharat unites two pillars: 150,000+ Ayushman Arogya Mandirs providing 12 CPHC packages, and PM-JAY providing ₹5 Lakhs cashless secondary/tertiary coverage per family/year.",
    followups: ["IPHS 2022 Three-Tier Architecture", "Social Determinants of Health", "Health Economics & Financing"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">HEALTH SYSTEMS &amp; POLICY</span>
        <h3 class="tutor-title">Ayushman Bharat: The Dual-Pillar Universal Health Strategy</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The Two Complementary Pillars</div>
        <p>Launched in 2018, Ayushman Bharat is India's flagship initiative to achieve Universal Health Coverage (UHC), structured across two distinct pillars:</p>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">🏛️ Pillar 1: 150,000+ Ayushman Arogya Mandirs (AB-HWCs)</div>
        <ul>
          <li><strong>Mandate:</strong> Upgrading existing Sub-Centres and PHCs into decentralized wellness hubs delivering <strong>Comprehensive Primary Health Care (CPHC)</strong>.</li>
          <li><strong>The 12 Expanded Service Packages:</strong>
            1. Maternal &amp; gestational care; 2. Neonatal &amp; infant health; 3. Child &amp; adolescent health; 4. Family planning &amp; reproductive health; 5. Communicable disease management; 6. General outpatient care; 7. Non-Communicable Disease (NCD) screening (hypertension, diabetes, oral, breast, cervical cancer); 8. Mental health; 9. ENT care; 10. Eye care; 11. Oral health; 12. Palliative &amp; geriatric care.
          </li>
          <li><strong>Point-of-Care Testing &amp; Telehealth:</strong> 14 free rapid tests and e-Sanjeevani teleconsultation with specialist physicians.</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title green">💳 Pillar 2: Pradhan Mantri Jan Arogya Yojana (PM-JAY)</div>
        <ul>
          <li><strong>Coverage:</strong> <strong>₹5 Lakhs per family per year</strong> on a family floater basis for secondary and tertiary inpatient care.</li>
          <li><strong>Beneficiary Pool:</strong> Covers the bottom 40% economically vulnerable population (~12 crore beneficiary families; >50 crore individuals) identified via SECC data.</li>
          <li><strong>Cashless &amp; Paperless:</strong> Operational across empanelled public and private hospitals; zero co-payment, zero restrictions on family size or age, covers pre-existing conditions from Day 1, plus 3 days pre-hospitalization and 15 days post-hospitalization medications.</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Pillar 1 keeps patients healthy and manages chronic conditions in the community; Pillar 2 protects families from financial catastrophe when hospitalization is unavoidable.
      </div>
      <div class="tutor-citation">📚 National Health Authority (NHA) Operational Guidelines | Park's PSM (28th Ed.) Chapter 19</div>
    `
  },
  {
    id: "demographic_health_indicators",
    topic: "Core Demographic & Health Indicators (MMR, IMR, TFR)",
    category: "Public Health Foundations",
    source: "Park's PSM (28th Ed.) Ch. 19 & Registrar General of India (SRS)",
    keywords: ["mmr", "maternal mortality ratio", "imr", "infant mortality rate", "u5mr", "tfr", "total fertility rate", "demographic indicators", "crude birth rate", "crude death rate", "life expectancy"],
    synonyms: ["morbidity indicators", "mortality metrics", "srs data india", "demographic transition"],
    takeaway: "MMR is measured per 100,000 live births; IMR is measured per 1,000 live births; Replacement level TFR is exactly 2.1 children per woman.",
    followups: ["Incidence vs Prevalence", "National Health Mission", "4 Levels of Prevention"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">PUBLIC HEALTH FOUNDATIONS</span>
        <h3 class="tutor-title">Core Demographic &amp; Health Status Indicators</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Standardized Mortality &amp; Fertility Metrics</div>
        <ul>
          <li><strong>Maternal Mortality Ratio (MMR):</strong>
            <br><code>MMR = (Maternal Deaths during pregnancy/delivery/42 days post-partum) / (Total Live Births) × 100,000</code>
            <br><em>Denominator Note:</em> Always expressed <strong>per 100,000 live births</strong>! India's national SRS has declined to &lt;97 per 100,000, progressing toward SDG 3.1 target (&lt;70).
          </li>
          <li><strong>Infant Mortality Rate (IMR):</strong>
            <br><code>IMR = (Deaths of infants under 1 year of age in Year) / (Total Live Births in Year) × 1,000</code>
            <br>Expressed <strong>per 1,000 live births</strong>. Reflects overall socioeconomic development and sanitary living conditions.
          </li>
          <li><strong>Under-5 Mortality Rate (U5MR):</strong>
            <br>The probability of a child dying between birth and exactly 5 years of age, expressed per 1,000 live births.
          </li>
          <li><strong>Total Fertility Rate (TFR):</strong>
            <br>The average number of children a woman would bear during her reproductive lifetime (15–49 years) if subject to prevailing age-specific fertility rates.
            <br><strong>Replacement-Level Fertility:</strong> Exactly <strong>2.1</strong> (at 2.1, each generation exactly replaces itself). India achieved a national TFR of 2.0 in NFHS-5.
          </li>
          <li><strong>Crude Birth Rate (CBR) &amp; Crude Death Rate (CDR):</strong>
            <br>Total live births or deaths in a year divided by the mid-year population, multiplied by 1,000.
          </li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Never mix up denominators: MMR uses 100,000 live births; IMR, CBR, and CDR use 1,000! Replacement TFR is 2.1.
      </div>
      <div class="tutor-citation">📚 Park's PSM (28th Ed.) Chapter 19: Demography and Family Planning | Sample Registration System (SRS) Bulletins</div>
    `
  },
  {
    id: "national_health_mission_programmes",
    topic: "National Health Mission (NHM) & Major Disease Control Programmes",
    category: "Public Health Foundations",
    source: "MoHFW Program Guidelines & Park's PSM (28th Ed.) Ch. 7 & 19",
    keywords: ["nhm", "national health mission", "nrhm", "nuhm", "ntep", "tuberculosis elimination", "dots", "nvbdcp", "npcdcs", "uip", "universal immunization programme", "nikshay"],
    synonyms: ["national disease programs", "tb control program", "vector borne diseases"],
    takeaway: "NHM provides architectural financing and human resources (ASHA/CHO) uniting vertical disease control programmes including NTEP (TB), NVBDCP (Vectors), and NPCDCS (NCDs).",
    followups: ["IPHS 2022 Three-Tier Architecture", "Ayushman Bharat & PM-JAY", "4 Levels of Prevention"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">PUBLIC HEALTH FOUNDATIONS</span>
        <h3 class="tutor-title">National Health Mission (NHM) &amp; Disease Control Architecture</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 NHM Architectural Framework</div>
        <p>The National Health Mission (encompassing NRHM Rural and NUHM Urban) provides decentralized flexible funding, untied grants to Panchayati Raj institutions, and operational human resources (ASHA, CHO) across primary care.</p>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">🔬 Major National Disease Control Programmes</div>
        <ul>
          <li><strong>National Tuberculosis Elimination Programme (NTEP):</strong>
            <ul>
              <li>Targets TB elimination via the digital <em>Ni-kshay</em> tracking ecosystem.</li>
              <li>Replaced intermittent DOTS with daily fixed-dose combination (FDC) regimens.</li>
              <li>Universal rapid molecular testing (CBNAAT / TrueNat) for early rifampicin resistance detection.</li>
              <li><em>Ni-kshay Poshan Yojana:</em> Direct Benefit Transfer (DBT) of ₹500/month for nutritional support throughout treatment.</li>
            </ul>
          </li>
          <li><strong>National Vector Borne Disease Control Programme (NVBDCP):</strong>
            <ul>
              <li>Umbrella program covering 6 vector-borne diseases: Malaria, Dengue, Chikungunya, Japanese Encephalitis, Kala-Azar, and Lymphatic Filariasis.</li>
              <li>Integrates indoor residual spraying (IRS), long-lasting insecticidal nets (LLINs), and source reduction.</li>
            </ul>
          </li>
          <li><strong>NPCDCS (Cancer, Diabetes, CVDs &amp; Stroke):</strong>
            <ul>
              <li>Population-based screening of adults $\ge 30$ years at Ayushman Arogya Mandirs for early hypertension, diabetes, and common oral/cervical/breast cancers.</li>
            </ul>
          </li>
          <li><strong>Universal Immunization Programme (UIP):</strong>
            <ul>
              <li>Provides free immunization against 12 vaccine-preventable diseases: TB (BCG), Polio (bOPV/fIPV), Hepatitis B, Diphtheria, Pertussis, Tetanus, Hib (Pentavalent), Rotavirus, Pneumococcal (PCV), Measles-Rubella (MR), and Japanese Encephalitis.</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Vertical disease programs succeed only when anchored into strong decentralized horizontal health systems (HWCs and PHCs) with robust community frontline workers (ASHAs).
      </div>
      <div class="tutor-citation">📚 MoHFW National Health Mission Guidelines | Park's PSM (28th Ed.) Chapters 7 &amp; 19</div>
    `
  },
  {
    id: "noir_measurement_scales",
    topic: "NOIR Hierarchy of Measurement Scales & Data Hygiene",
    category: "Biostatistics Core",
    source: "Daniel W.W. Biostatistics & Rothman Modern Epidemiology",
    keywords: ["noir", "scales of measurement", "nominal", "ordinal", "interval", "ratio", "measurement scale", "categorical data", "continuous data", "data hygiene"],
    synonyms: ["variable classification", "data types in biostatistics", "scales of data"],
    takeaway: "Measurement scale dictates permissible mathematics: Nominal allows Mode; Ordinal allows Median/IQR; Interval allows addition/subtraction; Ratio allows full arithmetic.",
    followups: ["Central Tendency for Skewed Data", "Statistical Test Selection Decision Tree", "Gaussian Normal Curve"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">BIOSTATISTICS CORE</span>
        <h3 class="tutor-title">The NOIR Hierarchy of Measurement Scales</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The Four Levels of Measurement (Stevens, 1946)</div>
        <p>Before selecting any statistical test or calculation, you must classify variables into the NOIR hierarchy:</p>
        <ol>
          <li><strong>1. Nominal Scale (Categorical / Unordered):</strong>
            <ul>
              <li><em>Definition:</em> Mutually exclusive categories with zero inherent mathematical ranking or order.</li>
              <li><em>Examples:</em> Blood group (A, B, AB, O); biological sex (Male, Female); hospital ward name; alive vs. dead.</li>
              <li><em>Permissible Operations:</em> Frequency counts, percentages, Mode. Means and standard deviations are mathematically meaningless!</li>
            </ul>
          </li>
          <li><strong>2. Ordinal Scale (Ranked Categories / Unequal Intervals):</strong>
            <ul>
              <li><em>Definition:</em> Categories have a natural intrinsic order, but the intervals between ranks are non-quantifiable or unequal.</li>
              <li><em>Examples:</em> Cancer stages (Stage I, II, III, IV); Likert satisfaction scale (1 to 5); NYHA heart failure classes; pain scale (0–10).</li>
              <li><em>Permissible Operations:</em> Median, Percentiles, Interquartile Range (IQR), Rank-order correlations (Spearman's $\\rho$). Calculating an arithmetic mean on ordinal data is mathematically flawed!</li>
            </ul>
          </li>
          <li><strong>3. Interval Scale (Equal Intervals / Arbitrary Zero):</strong>
            <ul>
              <li><em>Definition:</em> Ordered steps with equal, quantifiable distances between points, but with an <em>arbitrary zero</em> (zero does not mean complete absence).</li>
              <li><em>Examples:</em> Temperature in Celsius or Fahrenheit (0°C does not mean 'no temperature').</li>
              <li><em>Permissible Operations:</em> Addition, subtraction, Mean, Standard Deviation. Cannot calculate true ratios (40°C is not 'twice as hot' as 20°C).</li>
            </ul>
          </li>
          <li><strong>4. Ratio Scale (Equal Intervals / True Absolute Zero):</strong>
            <ul>
              <li><em>Definition:</em> Continuous numerical data possessing equal intervals and a <em>true absolute physical zero</em>.</li>
              <li><em>Examples:</em> Blood pressure in mmHg, serum creatinine in mg/dL, age in years, hospital length of stay in days, drug dose in mg.</li>
              <li><em>Permissible Operations:</em> Full mathematical and statistical toolkit (Mean, SD, geometric mean, true ratios, multiplication, division).</li>
            </ul>
          </li>
        </ol>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> You cannot run a t-test or report a mean on nominal or ordinal variables. Test selection begins with classifying variables into NOIR.
      </div>
      <div class="tutor-citation">📚 Daniel W.W. Biostatistics: A Foundation for Analysis in the Health Sciences (10th Ed.) Chapter 1</div>
    `
  },
  {
    id: "central_tendency_dispersion_skewed_data",
    topic: "Measures of Central Tendency & Dispersion: Symmetrical vs. Skewed Data",
    category: "Biostatistics Core",
    source: "Daniel W.W. Biostatistics & HAC501C Course Specifications",
    keywords: ["central tendency", "dispersion", "mean", "median", "mode", "standard deviation", "interquartile range", "iqr", "skewed data", "skewness", "length of stay skewed", "hospital costs skewed"],
    synonyms: ["mean vs median", "measures of spread", "positive skewness healthcare"],
    takeaway: "Healthcare datasets (LOS, patient bills) are positively skewed by severe outliers; reporting the Mean is misleading—always report the Median and Interquartile Range (IQR).",
    followups: ["NOIR Hierarchy of Measurement", "Statistical Test Selection Decision Tree", "Gaussian Normal Curve"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">BIOSTATISTICS CORE</span>
        <h3 class="tutor-title">Central Tendency &amp; Dispersion for Skewed Healthcare Data</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Symmetrical vs. Skewed Distributions</div>
        <ul>
          <li><strong>Normally Distributed (Symmetrical) Data:</strong>
            <ul>
              <li>Classic bell curve where <code>Mean ≈ Median ≈ Mode</code>.</li>
              <li><em>Measure of Central Tendency:</em> <strong>Arithmetic Mean</strong>.</li>
              <li><em>Measure of Dispersion:</em> <strong>Standard Deviation (SD)</strong>.</li>
            </ul>
          </li>
          <li><strong>Skewed (Asymmetrical) Data:</strong>
            <ul>
              <li>Healthcare operational and clinical datasets (hospital length of stay, ICU billing, emergency wait times) almost always exhibit heavy <strong>positive (right) skewness</strong>.</li>
              <li>In right-skewed data: <code>Mode &lt; Median &lt; Mean</code> (the long tail of extreme high values drags the mean upward).</li>
              <li><em>Measure of Central Tendency:</em> <strong>Median</strong> (the 50th percentile, completely robust against extreme outliers).</li>
              <li><em>Measure of Dispersion:</em> <strong>Interquartile Range (IQR = Q3 - Q1)</strong>.</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="tutor-callout">
        <strong>🏥 The Hospital Length of Stay (LOS) Trap:</strong><br>
        Suppose an orthopedic ward discharges 10 patients: nine patients recover smoothly and stay exactly <strong>3 days</strong> each; one complicated polytrauma patient develops sepsis and stays <strong>120 days</strong>.<br>
        • <strong>Mean LOS:</strong> <code>(27 + 120) / 10 = 14.7 days</code> (Totally distorted and misleading for planning!).<br>
        • <strong>Median LOS:</strong> <code>3.0 days</code> (Accurately reflects typical patient recovery trajectory).
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Outliers heavily distort the arithmetic mean. In hospital administration and health economics, always report Median and IQR for length of stay, procedure durations, and expenditure.
      </div>
      <div class="tutor-citation">📚 Daniel W.W. Biostatistics Chapter 2: Descriptive Statistics | HAC501C Hospital Operations</div>
    `
  },
  {
    id: "gaussian_normal_distribution_zscore",
    topic: "The Gaussian Normal Distribution, Z-Scores & The 68-95-99.7 Rule",
    category: "Biostatistics Core",
    source: "Daniel W.W. Biostatistics Ch. 4 (Probability Distributions)",
    keywords: ["normal distribution", "gaussian curve", "bell curve", "empirical rule", "68 95 99.7", "z score", "standard normal", "standard deviation rule", "reference ranges"],
    synonyms: ["gaussian distribution", "normal curve properties", "z-score calculation"],
    takeaway: "In a Gaussian distribution, exactly 95.0% of observations reside within ±1.96 standard deviations of the mean, forming the biological basis for clinical reference ranges.",
    followups: ["Hypothesis Testing, P-Values & CIs", "Statistical Test Selection Decision Tree", "Central Tendency for Skewed Data"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">BIOSTATISTICS CORE</span>
        <h3 class="tutor-title">The Gaussian Curve, Z-Scores &amp; Clinical Reference Ranges</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Mathematical Properties of the Normal Curve</div>
        <p>The Gaussian normal distribution is defined by its mean ($\mu$) and standard deviation ($\sigma$):</p>
        <ul>
          <li>Perfect bilateral symmetry around the central mean ($\mu$).</li>
          <li>Unimodal: <code>Mean = Median = Mode</code>.</li>
          <li>Total area under the probability density curve equals exactly <code>1.0</code> (100%).</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📊 The Empirical 68–95–99.7 Rule</div>
        <ul>
          <li><code>μ ± 1.0σ</code> contains approximately <strong>68.26%</strong> of all observations.</li>
          <li><code>μ ± 1.96σ</code> contains exactly <strong>95.00%</strong> of all observations. (Forms the universal biological definition of laboratory "Normal Reference Ranges"!).</li>
          <li><code>μ ± 2.58σ</code> contains exactly <strong>99.00%</strong> of all observations.</li>
          <li><code>μ ± 3.0σ</code> contains approximately <strong>99.74%</strong> of all observations.</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title green">🔢 Standardizing with Z-Scores</div>
        <p>The Z-score standardizes any normal raw score into standard deviations from the mean:</p>
        <p><code>Z = (X - μ) / σ</code></p>
        <p>A Z-score indicates how far above (+Z) or below (-Z) the mean an individual observation lies on a standard normal distribution ($\mu=0, \sigma=1$). An observation with $|Z| > 1.96$ falls in the extreme 5% tails of probability ($p < 0.05$).</p>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Laboratory reference ranges define 'healthy normal' as the central 95% of a healthy population ($\mu \pm 1.96\sigma$), meaning 5% of healthy individuals will naturally fall slightly outside normal limits by definition.
      </div>
      <div class="tutor-citation">📚 Daniel W.W. Biostatistics Chapter 4: Some Important Probability Distributions</div>
    `
  },
  {
    id: "hypothesis_testing_pvalues_confidence_intervals",
    topic: "Hypothesis Testing Logic, P-Values & 95% Confidence Intervals",
    category: "Biostatistics Core",
    source: "Daniel W.W. Biostatistics Ch. 7 & Rothman Modern Epidemiology",
    keywords: ["hypothesis testing", "null hypothesis", "p value", "confidence interval", "type 1 error", "type 2 error", "alpha", "beta", "statistical power", "ci 95%", "interpretation of p value"],
    synonyms: ["null hypothesis testing", "alpha beta error", "p-value definition", "confidence intervals"],
    takeaway: "A p-value is the probability of seeing data as extreme as observed assuming H0 is true; 95% Confidence Intervals provide both statistical significance and clinical magnitude.",
    followups: ["Statistical Test Selection Decision Tree", "Gaussian Normal Curve", "Correlation vs Regression"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">BIOSTATISTICS CORE</span>
        <h3 class="tutor-title">Hypothesis Testing, P-Values &amp; 95% Confidence Intervals</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The Logic of Inferential Hypothesis Testing</div>
        <ul>
          <li><strong>Null Hypothesis (H0):</strong> Proposes no true difference or association exists (any observed difference is purely random sampling variation).</li>
          <li><strong>Alternative Hypothesis (H1):</strong> Proposes a real underlying biological or operational difference exists between comparison groups.</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title red">⚠️ The Two Types of Inferential Decision Errors</div>
        <ul>
          <li><strong>Type I Error (Alpha / False Positive):</strong> Rejecting H0 when H0 is actually true in reality. Conventionally capped at <code>α = 0.05</code> (5%).</li>
          <li><strong>Type II Error (Beta / False Negative):</strong> Failing to reject H0 when H1 is true in reality. Conventionally capped at <code>β = 0.20</code> (20%).</li>
          <li><strong>Statistical Power (1 - Beta):</strong> The probability of correctly detecting a true difference when one truly exists (conventionally targeted at <code>1 - β = 0.80</code> or 80%).</li>
        </ul>
      </div>
      <div class="tutor-callout">
        <strong>🔍 What a P-Value Truly Means (and What it Does NOT Mean):</strong><br>
        • <strong>True Definition:</strong> The probability of obtaining a test statistic at least as extreme as the observed result, <em>assuming that the null hypothesis is completely true</em>.<br>
        • <strong>What it is NOT:</strong> It is NOT the probability that the null hypothesis is true! It does NOT measure the clinical magnitude or practical importance of an effect.
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title green">📊 95% Confidence Intervals: Superiority over P-Values</div>
        <p>A 95% Confidence Interval conveys both statistical significance and precision/effect size:</p>
        <ul>
          <li><strong>For Differences in Means:</strong> If the 95% CI spans zero (e.g. <code>-1.2 to +4.5 mmHg</code>), the result is <em>not statistically significant</em> ($p \ge 0.05$).</li>
          <li><strong>For Relative Risk or Odds Ratio:</strong> If the 95% CI spans 1.0 (e.g. <code>RR = 1.25, 95% CI: 0.85 to 1.84</code>), the finding is <em>not statistically significant</em> ($p \ge 0.05$).</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Never judge a clinical study on p-values alone. Always inspect the 95% Confidence Interval to determine the clinical magnitude and precision of the finding.
      </div>
      <div class="tutor-citation">📚 Daniel W.W. Biostatistics Chapter 7: Hypothesis Testing | Rothman Modern Epidemiology</div>
    `
  },
  {
    id: "statistical_test_selection_decision_tree",
    topic: "Complete Statistical Test Selection Decision Tree",
    category: "Biostatistics Core",
    source: "Daniel W.W. Biostatistics & BMJ Statistics Notes",
    keywords: ["statistical test selection", "which test to use", "parametric vs non parametric", "student t test", "mann whitney u", "anova", "kruskal wallis", "chi square test", "fishers exact", "wilcoxon"],
    synonyms: ["test selection matrix", "parametric vs non-parametric", "choosing statistical test"],
    takeaway: "Select Student t-test or ANOVA for normal continuous data; select Mann-Whitney U or Kruskal-Wallis for skewed/ordinal data; select Chi-Square for categorical proportions.",
    followups: ["Hypothesis Testing, P-Values & CIs", "Correlation vs Regression", "Central Tendency for Skewed Data"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">BIOSTATISTICS CORE</span>
        <h3 class="tutor-title">The Complete Statistical Test Selection Decision Engine</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Two Decisive Questions for Test Selection</div>
        <p>To identify the correct inferential statistical test, answer two fundamental questions:</p>
        <ol>
          <li><strong>What is the variable type &amp; distribution shape?</strong> (Continuous Normal vs. Continuous Skewed / Ordinal vs. Categorical Proportions).</li>
          <li><strong>What is the study design structure?</strong> (2 Independent Groups vs. Paired / Pre-Post vs. $\ge 3$ Independent Groups).</li>
        </ol>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📊 The Master Selection Matrix</div>
        <ul>
          <li><strong>Continuous, Normally Distributed (Parametric):</strong>
            <ul>
              <li><em>2 Independent Groups:</em> <strong>Independent Samples Student's t-Test</strong> (e.g. comparing mean systolic BP between drug vs placebo).</li>
              <li><em>2 Paired / Pre-Post Groups:</em> <strong>Paired Samples Student's t-Test</strong> (e.g. comparing mean cholesterol before and after diet intervention in the same cohort).</li>
              <li><em>$\ge 3$ Independent Groups:</em> <strong>One-Way ANOVA</strong> (followed by post-hoc Tukey or Bonferroni adjustments).</li>
            </ul>
          </li>
          <li><strong>Continuous Skewed or Ordinal Data (Non-Parametric):</strong>
            <ul>
              <li><em>2 Independent Groups:</em> <strong>Mann-Whitney U Test</strong> (Wilcoxon Rank-Sum Test) (e.g. comparing hospital length of stay between two surgical wards).</li>
              <li><em>2 Paired / Pre-Post Groups:</em> <strong>Wilcoxon Signed-Rank Test</strong> (e.g. comparing pain score ranks pre- and post-analgesia).</li>
              <li><em>$\ge 3$ Independent Groups:</em> <strong>Kruskal-Wallis H Test</strong>.</li>
            </ul>
          </li>
          <li><strong>Categorical Frequency Data (Proportions / Contingency):</strong>
            <ul>
              <li><em>Comparing Proportions across Independent Groups:</em> <strong>Pearson's Chi-Square ($\chi^2$) Test of Independence</strong>.</li>
              <li><em>Small Sample Size:</em> <strong>Fisher's Exact Test</strong> (mandatory whenever any expected cell count in a 2x2 table is $&lt; 5$).</li>
              <li><em>Paired Binary Data (Pre-Post):</em> <strong>McNemar's Test</strong>.</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Never use a t-test on hospital length of stay or billing data without verifying normality; use the Mann-Whitney U test for skewed healthcare data.
      </div>
      <div class="tutor-citation">📚 Daniel W.W. Biostatistics Chapters 7 &amp; 8 | BMJ Statistics Notes: Parametric vs Non-Parametric Methods</div>
    `
  },
  {
    id: "correlation_and_regression_analysis",
    topic: "Correlation vs. Regression Analysis (Linear, Logistic, Cox)",
    category: "Biostatistics Core",
    source: "Daniel W.W. Biostatistics Ch. 9–10 & Rothman Modern Epidemiology",
    keywords: ["correlation", "regression", "pearson r", "spearman rho", "linear regression", "logistic regression", "odds ratio regression", "cox proportional hazards", "hazard ratio", "multivariate analysis"],
    synonyms: ["linear vs logistic regression", "multivariable modeling", "survival analysis cox"],
    takeaway: "Linear regression models continuous outcomes; Logistic regression models binary outcomes yielding Adjusted Odds Ratios; Cox regression models time-to-event survival data.",
    followups: ["Statistical Test Selection Decision Tree", "Hypothesis Testing, P-Values & CIs", "Case-Control Studies & Odds Ratio"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">BIOSTATISTICS CORE</span>
        <h3 class="tutor-title">Correlation vs. Regression: Linear, Logistic &amp; Cox Models</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Correlation vs. Regression: Fundamental Difference</div>
        <ul>
          <li><strong>Correlation (Pearson's r / Spearman's ρ):</strong> Measures the strength and direction of linear association between two variables. It is symmetric (X with Y = Y with X) and does NOT imply causality. Range: -1.0 to +1.0.</li>
          <li><strong>Regression Modeling:</strong> Establishes a directional predictive relationship where one or more Independent Variables ($X_1, X_2$) predict a Dependent Outcome ($Y$).</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📊 The Three Core Clinical Regression Models</div>
        <ul>
          <li><strong>1. Linear Regression (Continuous Outcome):</strong>
            <br><code>Y = β0 + β1(X1) + β2(X2) + ε</code>
            <br><em>Outcome:</em> Continuous variable (e.g. Fasting Blood Glucose, Systolic BP).
            <br><em>Interpretation:</em> The $\beta$ coefficient indicates the unit change in $Y$ per 1-unit increase in $X$.
          </li>
          <li><strong>2. Logistic Regression (Binary Categorical Outcome):</strong>
            <br><code>Logit(P) = ln[P / (1 - P)] = β0 + β1(X1) + β2(X2)</code>
            <br><em>Outcome:</em> Binary dichotomous event (e.g. In-hospital Mortality: Yes/No; Readmission: Yes/No).
            <br><em>Superpower:</em> Exponentiating coefficients (<code>e^β</code>) directly produces <strong>Adjusted Odds Ratios (aOR)</strong> while controlling for multiple confounding variables simultaneously!
          </li>
          <li><strong>3. Cox Proportional Hazards Regression (Time-to-Event Survival):</strong>
            <br><em>Outcome:</em> Time elapsed until an event occurs (e.g. months until cancer recurrence, days until hospital discharge).
            <br><em>Metric:</em> <strong>Hazard Ratio (HR)</strong>.
          </li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> In modern health research, multivariable logistic regression is the primary mathematical engine used to eliminate confounding and isolate true risk factors.
      </div>
      <div class="tutor-citation">📚 Daniel W.W. Biostatistics Chapters 9 &amp; 10 | Kleinbaum Applied Regression Analysis</div>
    `
  },
  {
    id: "healthcare_complex_adaptive_systems",
    topic: "Healthcare Organizations as Complex Adaptive Systems (CAS)",
    category: "Healthcare Management",
    source: "Shortell & Kaluzny Healthcare Management & HAC501C",
    keywords: ["complex adaptive systems", "cas in healthcare", "dual hierarchy", "clinical autonomy", "zero tolerance for error", "healthcare management dynamics", "hospital administration complexity"],
    synonyms: ["hospital organizational behavior", "clinical vs managerial hierarchy", "systems thinking hospital"],
    takeaway: "Hospitals function under a unique Dual Hierarchy: professional clinical autonomy operates alongside administrative managerial hierarchy under zero-tolerance for clinical error.",
    followups: ["POSDCORB in Hospital Operations", "Hersey-Blanchard Situational Leadership", "SBAR Clinical Communication"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">HEALTHCARE MANAGEMENT</span>
        <h3 class="tutor-title">Healthcare Organizations as Complex Adaptive Systems (CAS)</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 What Makes Hospitals Organizationally Unique?</div>
        <p>Unlike commercial factories or IT software firms, healthcare institutions operate as <strong>Complex Adaptive Systems (CAS)</strong> defined by four unique structural tensions:</p>
        <ul>
          <li><strong>The Dual Hierarchy:</strong> Hospitals operate with two parallel, co-existing lines of authority:
            <ol>
              <li><em>The Professional Bureaucracy (Medical Staff):</em> Doctors, surgeons, and department heads governed by professional autonomy, Hippocratic ethics, and individual patient advocacy.</li>
              <li><em>The Administrative Hierarchy:</em> Hospital CEO, COO, CFO, and operations managers governed by fiscal sustainability, bed turnover, compliance, and institutional viability.</li>
            </ol>
          </li>
          <li><strong>Zero-Tolerance for Error:</strong> In commercial manufacturing, a 2% defect rate is acceptable scrap; in hospital operating rooms or ICUs, a 2% procedural failure rate represents catastrophic morbidity or death.</li>
          <li><strong>Unpredictable 24/7 Demand Inflow:</strong> Hospitals cannot schedule or pause acute emergencies; patient surges arrive unpredictably at 3:00 AM regardless of bed availability.</li>
          <li><strong>High Interdisciplinary Interdependence:</strong> A single patient journey requires flawless handoffs across 10+ autonomous teams: Triage, Nursing, Radiology, Pathology, Surgery, ICU, Pharmacy, and Billing.</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Successful hospital leadership cannot be purely top-down autocratic command-and-control; it requires collaborative clinical governance that bridges the medical and administrative hierarchies.
      </div>
      <div class="tutor-citation">📚 Shortell &amp; Kaluzny's Healthcare Management (7th Ed.) | HAC501C Healthcare Organization &amp; Management</div>
    `
  },
  {
    id: "posdcorb_hospital_operations",
    topic: "POSDCORB Classical Administrative Functions in Hospitals",
    category: "Healthcare Management",
    source: "Luther Gulick Classical Administrative Theory & HAC501C",
    keywords: ["posdcorb", "management functions in hospital", "luther gulick", "planning organizing staffing directing coordinating reporting budgeting", "capex opex", "hospital operations"],
    synonyms: ["7 management functions", "gulick posdcorb", "administrative functions hospital"],
    takeaway: "Gulick's POSDCORB operationalizes hospital stewardship: Planning (strategic goals), Organizing (departments), Staffing (WISN ratios), Directing, Coordinating, Reporting, and Budgeting (CAPEX/OPEX).",
    followups: ["Healthcare Organizations as Complex Systems", "Hersey-Blanchard Situational Leadership", "Hospital Operational Metrics: BOR & ALOS"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">HEALTHCARE MANAGEMENT</span>
        <h3 class="tutor-title">Luther Gulick's POSDCORB in Hospital Administration</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The Seven Classical Managerial Functions</div>
        <p>Formulated by Luther Gulick and Lyndall Urwick, <strong>POSDCORB</strong> provides the foundational operational framework for running healthcare institutions:</p>
        <ul>
          <li><strong>P - Planning:</strong> Formulating strategic roadmaps, disaster surge capacity protocols, expansion blueprints, and SMART objectives (e.g. reducing emergency waiting times by 25% in Q3).</li>
          <li><strong>O - Organizing:</strong> Structuring clinical departments (medicine, surgery), diagnostic services (imaging, labs), and support services (CSSD, biomedical engineering, laundry); establishing reporting relationships and span of control.</li>
          <li><strong>S - Staffing:</strong> Utilizing Workload Indicators of Staffing Need (WISN) to calculate mandated nurse-to-patient ratios (1:1 in ICU, 1:4 in step-down, 1:6 in general wards); conducting physician credentialing and privileging.</li>
          <li><strong>D - Directing:</strong> Issuing clear operational guidelines, establishing clinical Standard Operating Procedures (SOPs), and providing frontline leadership during clinical crises.</li>
          <li><strong>CO - Coordinating:</strong> Breaking inter-departmental silos to harmonize patient flow between Emergency, Operating Theatres, Intensive Care, Blood Bank, and Discharge Billing.</li>
          <li><strong>R - Reporting:</strong> Maintaining statutory disease notification registers (IDSP), mortality reviews, infection control surveillance dashboards, and NABH quality audits.</li>
          <li><strong>B - Budgeting:</strong> Managing Capital Expenditure (CAPEX: purchasing an MRI scanner or robotic surgical system) vs. Operational Expenditure (OPEX: pharmaceuticals, PPE, medical gases, staff salaries), and variance cost accounting.</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Effective healthcare administrators master both sides of the budget: CAPEX builds the hospital's technological capacity, but disciplined OPEX keeps daily operations solvent and safe.
      </div>
      <div class="tutor-citation">📚 Luther Gulick (1937) Papers on the Science of Administration | HAC501C Course Specifications</div>
    `
  },
  {
    id: "hersey_blanchard_situational_leadership",
    topic: "Hersey-Blanchard Situational Leadership in Healthcare Teams",
    category: "Healthcare Management",
    source: "Hersey & Blanchard Management of Organizational Behavior & HBR",
    keywords: ["situational leadership", "hersey blanchard", "readiness levels", "s1 directing", "s2 coaching", "s3 supporting", "s4 delegating", "r1 r2 r3 r4", "leadership styles in hospital"],
    synonyms: ["situational leadership model", "matching leadership styles", "staff readiness levels"],
    takeaway: "Match leadership style to follower readiness: S1 Directing for R1 (unable/insecure); S2 Coaching for R2 (unable/willing); S3 Supporting for R3 (able/insecure); S4 Delegating for R4 (able/confident).",
    followups: ["Motivation Theories: Herzberg & Maslow", "SBAR Clinical Communication", "Healthcare Organizations as Complex Systems"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">HEALTHCARE MANAGEMENT</span>
        <h3 class="tutor-title">Hersey-Blanchard Situational Leadership in Healthcare</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Core Premise: Adaptive Behavioral Flexibility</div>
        <p>The Hersey-Blanchard model asserts that there is no single "best" leadership style. Exceptional healthcare leaders flex their behavior (Task vs. Relationship orientation) to match the <strong>Readiness Level (R1 to R4)</strong> of their staff:</p>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">👥 Follower Readiness Levels &amp; Matching Leadership Styles</div>
        <ul>
          <li><strong>R1: Low Competence, Low Commitment / Insecure:</strong>
            <br><em>Clinical Example:</em> A newly hired junior nurse on Day 1 in the trauma ICU.
            <br><em>Matching Style:</em> <strong>S1: DIRECTING (High Task, Low Relationship)</strong>. Provide explicit, step-by-step instructions, establish strict checklists, and closely monitor procedural execution.
          </li>
          <li><strong>R2: Some Competence, High Commitment / Eager:</strong>
            <br><em>Clinical Example:</em> An enthusiastic intern doctor who knows theoretical pharmacology but lacks practical central-line insertion experience.
            <br><em>Matching Style:</em> <strong>S2: COACHING (High Task, High Relationship)</strong>. Explain decisions, solicit input, but retain final decision authority while actively teaching technique.
          </li>
          <li><strong>R3: High Competence, Variable Commitment / Insecure:</strong>
            <br><em>Clinical Example:</em> A skilled OT technician hesitant and anxious about adopting a newly acquired robotic surgical console.
            <br><em>Matching Style:</em> <strong>S3: SUPPORTING (Low Task, High Relationship)</strong>. Facilitate problem-solving, build psychological safety, listen actively, and bolster confidence.
          </li>
          <li><strong>R4: High Competence, High Commitment / Confident:</strong>
            <br><em>Clinical Example:</em> A seasoned senior infection control nurse or veteran department chair.
            <br><em>Matching Style:</em> <strong>S4: DELEGATING (Low Task, Low Relationship)</strong>. Grant full operational autonomy and strategic freedom.
          </li>
        </ul>
      </div>
      <div class="tutor-callout">
        <strong>⚠️ The Dual Administrative Danger:</strong><br>
        • Using <em>Delegating</em> on an R1 novice causes catastrophic clinical errors and malpractice.<br>
        • Using <em>Directing</em> on an R4 expert causes micromanagement, resentment, and clinical resignations.
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Assess your team member's specific task readiness before issuing directives. Shift from S1 directing to S4 delegating as their competence and confidence mature.
      </div>
      <div class="tutor-citation">📚 Hersey &amp; Blanchard: Management of Organizational Behavior (10th Ed.) | Harvard Business Review Leadership</div>
    `
  },
  {
    id: "motivation_theories_herzberg_maslow",
    topic: "Workforce Motivation in Healthcare: Herzberg's Two-Factor & Maslow",
    category: "Healthcare Management",
    source: "Herzberg Work and the Nature of Man & Shortell & Kaluzny",
    keywords: ["herzberg", "two factor theory", "motivation hygiene", "hygiene factors", "motivators", "maslow hierarchy healthcare", "clinical burnout", "nurse turnover", "workforce retention"],
    synonyms: ["herzberg motivation hygiene", "preventing clinical burnout", "nurse retention strategies"],
    takeaway: "Hygiene factors (salary, working conditions) only prevent dissatisfaction; true clinical engagement, retention, and discretionary effort require Motivators (recognition, achievement, autonomy).",
    followups: ["Hersey-Blanchard Situational Leadership", "POSDCORB in Hospital Operations", "Healthcare Organizations as Complex Systems"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">HEALTHCARE MANAGEMENT</span>
        <h3 class="tutor-title">Herzberg's Two-Factor Theory &amp; Healthcare Workforce Retention</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Frederick Herzberg's Dual-Factor Motivation Model</div>
        <p>Frederick Herzberg proved that job satisfaction and job dissatisfaction are NOT opposite ends of the same spectrum; they are driven by two distinct sets of workplace conditions:</p>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">1. Hygiene Factors (Extrinsic — The Context of Work)</div>
        <ul>
          <li><em>Examples:</em> Base salary, job security, physical working environment (air conditioning, clean on-call duty rooms), hospital administrative policies, relationship with supervisors.</li>
          <li><strong>The Golden Rule of Hygiene:</strong> If hygiene factors are deficient or toxic, healthcare workers experience severe <strong>dissatisfaction, grievances, and strikes</strong>. However, optimizing hygiene factors merely brings staff to a neutral baseline—it does <em>NOT</em> inspire clinical excellence or discretionary effort!</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title green">2. Motivator Factors (Intrinsic — The Content of Work)</div>
        <ul>
          <li><em>Examples:</em> Sense of clinical achievement (saving a critically ill patient), formal public recognition of excellence, challenging and meaningful medical work, clinical autonomy, and career progression pathways.</li>
          <li><strong>The Golden Rule of Motivators:</strong> Only motivators actively generate <strong>deep job satisfaction, clinical dedication, and institutional retention</strong>.</li>
        </ul>
      </div>
      <div class="tutor-callout">
        <strong>🏥 The Healthcare Administrator's Retention Riddle:</strong><br>
        Hospital CEOs frequently wonder why staff nurses resign despite competitive market-rate salaries. The answer: salary is a hygiene factor. If nurses endure continuous disrespect, zero recognition for saving lives, and no continuing medical education (CME), they will burn out and leave regardless of pay!
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Fair salaries prevent nurses and clinicians from being dissatisfied; clinical recognition, autonomy, and professional growth are what inspire them to stay and excel.
      </div>
      <div class="tutor-citation">📚 Frederick Herzberg: Work and the Nature of Man | Shortell &amp; Kaluzny Chapter on Human Resources in Health</div>
    `
  },
  {
    id: "sbar_clinical_communication",
    topic: "The SBAR Standardized Clinical Communication Protocol",
    category: "Healthcare Management & Safety",
    source: "Institute for Healthcare Improvement (IHI) & WHO Patient Safety",
    keywords: ["sbar", "situation background assessment recommendation", "clinical communication", "patient handoff", "sentinel events", "medical errors communication", "handoff protocol", "high reliability healthcare"],
    synonyms: ["sbar framework", "structured handoff", "ihi sbar tool"],
    takeaway: "Over 70% of hospital sentinel medical errors trace to communication handoff failures; SBAR (Situation, Background, Assessment, Recommendation) standardizes urgent escalations.",
    followups: ["NABH Accreditation & Patient Safety", "Healthcare Organizations as Complex Systems", "Hersey-Blanchard Situational Leadership"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">HEALTHCARE MANAGEMENT &amp; SAFETY</span>
        <h3 class="tutor-title">SBAR: Standardized Handoff Communication Protocol</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Why Communication Standardization Saves Lives</div>
        <p>Over 70% of sentinel events (preventable patient deaths or permanent disability) investigated by the Joint Commission and NABH trace back to communication breakdowns during clinical handoffs. SBAR originated in US Navy nuclear submarine fleets and was adapted by IHI and WHO for high-reliability healthcare:</p>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📋 The Four Structured Steps of SBAR</div>
        <ul>
          <li><strong>S — Situation (10-Second Hook):</strong> State your name, unit, patient name, bed number, and the immediate urgent clinical problem.</li>
          <li><strong>B — Background (Clinical Context):</strong> Provide concise, relevant history (admission diagnosis, surgical timeline, baseline vitals, and current medication regimen).</li>
          <li><strong>A — Assessment (Clinical Impression):</strong> State what you think the underlying physiological or administrative problem is based on your examination and trend data.</li>
          <li><strong>R — Recommendation (Explicit Action Request):</strong> State exactly what specific clinical intervention or bedside evaluation you need right now.</li>
        </ul>
      </div>
      <div class="tutor-callout">
        <strong>Worked Clinical Example:</strong><br>
        • <strong>S:</strong> <em>"Dr. Sharma, this is Nurse Rekha from 3rd Floor ICU. I am calling about Patient Ramesh in Bed 12 who has developed acute respiratory distress in the last 15 minutes."</em><br>
        • <strong>B:</strong> <em>"He is a 54-year-old post-operative laparotomy patient on Day 2. His baseline oxygen saturation was 98% on room air."</em><br>
        • <strong>A:</strong> <em>"His SpO2 has dropped to 86%, respiratory rate is 34/min, and he has bilateral crackles. I suspect acute pulmonary edema or fluid overload."</em><br>
        • <strong>R:</strong> <em>"I need you to come to Bed 12 immediately, authorize an urgent portable chest X-ray, and prescribe IV Furosemide 40 mg."</em>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> SBAR eliminates rambling, ambiguous phone calls and forces healthcare workers to conclude with an explicit, actionable clinical recommendation.
      </div>
      <div class="tutor-citation">📚 Institute for Healthcare Improvement (IHI) SBAR Toolkit | WHO Patient Safety Curriculum Guide</div>
    `
  },
  {
    id: "nabh_accreditation_patient_safety_rca",
    topic: "NABH Accreditation, Patient Safety Goals & Bio-Medical Waste",
    category: "Healthcare Management & Safety",
    source: "National Accreditation Board for Hospitals (NABH 5th Ed.) & BMWM Rules 2016",
    keywords: ["nabh", "patient safety", "biomedical waste", "bmwm 2016", "color coding waste", "yellow red blue white translucent", "root cause analysis", "fishbone diagram", "5 whys", "sentinel events"],
    synonyms: ["nabh standards", "biomedical waste color coding", "rca fishbone ishikawa"],
    takeaway: "BMWM 2016 mandates 4 color-coded streams: Yellow (incineration), Red (plastics recycling), White (sharps pit), and Blue (glassware/implants); RCA uses Fishbone & 5 Whys.",
    followups: ["SBAR Clinical Communication", "HAI Surveillance & Device Rates", "Hospital Operational Metrics: BOR & ALOS"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">HEALTHCARE MANAGEMENT &amp; SAFETY</span>
        <h3 class="tutor-title">NABH Accreditation, Patient Safety &amp; Bio-Medical Waste (BMWM 2016)</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 NABH Core Patient Safety Goals (IPSG)</div>
        <ul>
          <li><strong>Patient Identification:</strong> Minimum two patient-specific identifiers (Full Legal Name + Unique Hospital ID / UHID). Room or bed numbers are strictly prohibited as identifiers!</li>
          <li><strong>Effective Communication:</strong> Mandatory "Read-Back" protocol for all verbal and telephonic medication orders.</li>
          <li><strong>High-Alert Medications:</strong> Double-check protocols and segregated storage for concentrated electrolytes (KCl, hypertonic saline).</li>
          <li><strong>Safe Surgery:</strong> WHO Surgical Safety Checklist (Sign-In, Time-Out, Sign-Out) to eliminate wrong-site, wrong-procedure surgeries.</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">🗑️ Bio-Medical Waste Management (BMWM Rules 2016) Color Streams</div>
        <ul>
          <li><strong>🟡 YELLOW BINS (Incineration / Plasma Pyrolysis):</strong> Anatomical tissues, organs, soiled cotton dressings, plasters, expired drugs, cytotoxic chemotherapy waste, infected linen.</li>
          <li><strong>🔴 RED BINS (Autoclave / Microwave &amp; Plastic Shredding):</strong> Contaminated recyclable plastics: IV tubing, catheter bags, urine containers, vacutainers, disposable syringes without needles.</li>
          <li><strong>⚪ WHITE TRANSLUCENT CONTAINER (Puncture-Proof Sharps Pit):</strong> Contaminated sharps: hypodermic needles, scalpel blades, fixed-needle syringes, trocars.</li>
          <li><strong>🔵 BLUE CARDBOARD BOX (Disinfection &amp; Glass Recycling):</strong> Glassware, broken medicine vials, ampoules, metallic orthopedic implants.</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title green">🔍 Root Cause Analysis (RCA): Fishbone &amp; The 5 Whys</div>
        <p>Following any sentinel clinical event, hospital quality teams conduct an RCA using the <strong>Ishikawa (Fishbone) Diagram</strong> across 6 dimensions: Man, Machine, Material, Method, Measurement, and Milieu, drilling down with the <strong>5 Whys</strong> to isolate latent systemic flaws rather than blaming individual frontline workers.</p>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Never dispose of sharps in red or yellow plastic bags—always deposit them in puncture-proof white translucent containers to prevent occupational needle-stick injuries.
      </div>
      <div class="tutor-citation">📚 NABH Standards for Hospitals (5th Edition) | Ministry of Environment Bio-Medical Waste Management Rules 2016</div>
    `
  },
  {
    id: "hospital_operational_metrics_bor_alos",
    topic: "Hospital Operational Metrics: BOR, ALOS & Capacity Planning",
    category: "Healthcare Management",
    source: "WHO Hospital Performance Indicators & HAC501C Course Specifications",
    keywords: ["bed occupancy rate", "bor", "average length of stay", "alos", "bed turnover interval", "bti", "hospital metrics", "capacity planning", "hospital productivity"],
    synonyms: ["inpatient bed metrics", "hospital operational efficiency", "bed utilization formulas"],
    takeaway: "Optimal Bed Occupancy Rate (BOR) is 80–85%; rates > 90% create emergency boarding bottlenecks and elevated infection rates; ALOS reflects clinical efficiency.",
    followups: ["POSDCORB in Hospital Operations", "Healthcare Organizations as Complex Systems", "Central Tendency for Skewed Data"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">HEALTHCARE MANAGEMENT</span>
        <h3 class="tutor-title">Inpatient Operational Metrics: BOR, ALOS &amp; Bed Turnover</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Core Operational Productivity Metrics</div>
        <ul>
          <li><strong>Bed Occupancy Rate (BOR):</strong>
            <br><code>BOR = (Total Inpatient Bed-Days Occupied in Period) / (Total Available Bed-Days in Period) × 100</code>
            <br><em>Operational Benchmarks:</em>
            <ul>
              <li><strong>Optimal: 80% to 85%</strong>. Maximizes operational asset utilization while maintaining contingency reserve for emergency disaster surges.</li>
              <li><strong>&lt; 75%:</strong> Underutilized capital assets and excess overhead cost.</li>
              <li><strong>&gt; 90%:</strong> Severe hospital gridlock, emergency department boarding, nursing burnout, and surging hospital-acquired infection rates.</li>
            </ul>
          </li>
          <li><strong>Average Length of Stay (ALOS):</strong>
            <br><code>ALOS = (Total Inpatient Days in Period) / (Total Inpatient Discharges + Deaths)</code>
            <br>Reflects clinical care efficiency and diagnostic turnaround times. Acute surgical centers target 3–4 days; multi-specialty tertiary hospitals target 4–6 days.
          </li>
          <li><strong>Bed Turnover Interval (BTI):</strong>
            <br><code>BTI = (Available Bed-Days - Occupied Bed-Days) / Total Discharges</code>
            <br>The average duration (in days or hours) a hospital bed remains empty between the discharge of one patient and the admission of the next.
          </li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> A hospital operating at 98% occupancy is not highly efficient—it is on the brink of operational collapse during sudden seasonal epidemics.
      </div>
      <div class="tutor-citation">📚 WHO Guidelines on Hospital Operational Indicators | HAC501C Healthcare Organization &amp; Management</div>
    `
  },
  {
    id: "pico_finer_research_framework",
    topic: "Research Question Formulation: PICO & FINER Frameworks",
    category: "Research Methods & Bioethics",
    source: "Jacobsen Health Research Methods Ch. 3 & Sackett Evidence-Based Medicine",
    keywords: ["pico", "finer", "research question", "population intervention comparison outcome", "feasible interesting novel ethical relevant", "formulating research question", "evidence based research"],
    synonyms: ["pico question formulation", "finer criteria", "structured research inquiry"],
    takeaway: "Use FINER (Feasible, Interesting, Novel, Ethical, Relevant) to evaluate study viability; use PICO (Population, Intervention, Comparison, Outcome) to build the search and protocol.",
    followups: ["Systematic Literature Searching: MeSH & Boolean", "The Evidence Hierarchy & EBM Pyramid", "Scientific Paper Structuring: IMRaD"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">RESEARCH METHODS &amp; BIOETHICS</span>
        <h3 class="tutor-title">Research Question Architecture: FINER &amp; PICO</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The FINER Feasibility Checklist</div>
        <p>Before writing a dissertation protocol, interrogate the proposed research topic against the FINER criteria:</p>
        <ul>
          <li><strong>F — Feasible:</strong> Are there sufficient sample sizes, technical equipment, budget, and time within the postgraduate academic cycle?</li>
          <li><strong>I — Interesting:</strong> Does the inquiry stimulate genuine intellectual curiosity for the researcher and mentor?</li>
          <li><strong>N — Novel:</strong> Does it confirm, refute, or add fresh insights to existing global literature?</li>
          <li><strong>E — Ethical:</strong> Can it receive formal approval from the Institutional Ethics Committee (IEC) without unmitigated human harm?</li>
          <li><strong>R — Relevant:</strong> Will the findings influence clinical guidelines, health policy, or administrative workflows?</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📐 The PICO / PECO Question Framework</div>
        <ul>
          <li><strong>P — Population / Patient:</strong> Clearly define clinical condition, age, sex, and healthcare setting (e.g. <em>Adult diabetic patients with chronic foot ulcers in a tertiary hospital OPD</em>).</li>
          <li><strong>I / E — Intervention / Exposure:</strong> The specific therapeutic regimen, diagnostic test, or environmental exposure under investigation (e.g. <em>Platelet-Rich Plasma dressing</em>).</li>
          <li><strong>C — Comparison / Control:</strong> The standard-of-care, placebo, or unexposed benchmark (e.g. <em>Standard saline moist dressings</em>).</li>
          <li><strong>O — Outcome:</strong> Explicit, objectively measurable clinical endpoint (e.g. <em>Time to complete wound epithelialization at 12 weeks</em>).</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> A sloppy research question leads to a failed dissertation. A precise PICO statement directly dictates your PubMed search string, inclusion criteria, and statistical analysis.
      </div>
      <div class="tutor-citation">📚 Jacobsen (2016) Introduction to Health Research Methods: A Practical Guide Chapter 3</div>
    `
  },
  {
    id: "pubmed_mesh_boolean_literature_search",
    topic: "Systematic Literature Searching: Boolean Operators & MeSH Terms",
    category: "Research Methods & Bioethics",
    source: "US NLM PubMed Handbook & PRISMA 2020 Statement",
    keywords: ["pubmed", "mesh", "medical subject headings", "boolean operators", "literature search", "prisma", "systematic review search", "tiab", "search string", "database searching"],
    synonyms: ["pubmed search syntax", "boolean operators and or not", "mesh terms indexing"],
    takeaway: "Use AND to intersect concepts; use OR to bundle synonyms; use controlled MeSH headings to explode hierarchical sub-terms and capture comprehensive evidence.",
    followups: ["Research Question Formulation: PICO & FINER", "The Evidence Hierarchy & EBM Pyramid", "Scientific Paper Structuring: IMRaD"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">RESEARCH METHODS &amp; BIOETHICS</span>
        <h3 class="tutor-title">Biomedical Literature Searching: Boolean Logic &amp; MeSH</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The Power of Controlled Vocabulary (MeSH)</div>
        <p>Medical Subject Headings (MeSH) is the National Library of Medicine's standardized controlled hierarchical thesaurus:</p>
        <ul>
          <li><strong>Automatic Explosion:</strong> Searching a broad MeSH term (e.g. <code>"Cardiovascular Diseases"[MeSH]</code>) automatically cascades downward to retrieve all underlying granular conditions (Hypertension, Arrhythmias, Myocardial Infarction).</li>
          <li><strong>Synonym Invariance:</strong> Searching <code>"Neoplasms"[MeSH]</code> captures articles using "cancer", "malignancy", "tumors", and "oncology".</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">🔍 Boolean Syntax Architecture</div>
        <ul>
          <li><strong>OR (Broadening):</strong> Combines synonyms, alternative spellings, and acronyms within the same PICO component:
            <br><code>("Dengue"[MeSH] OR "Dengue Fever"[tiab] OR "Breakbone Fever"[tiab])</code>
          </li>
          <li><strong>AND (Narrowing):</strong> Intersects distinct PICO concepts; retrieves records containing both elements:
            <br><code>Concept 1 (Population) AND Concept 2 (Intervention) AND Concept 3 (Outcome)</code>
          </li>
          <li><strong>NOT (Exclusion):</strong> Excludes unwanted concepts. <em>Warning:</em> Use sparingly, as it risks inadvertently eliminating valuable mixed-topic literature!</li>
          <li><strong>Field Tags:</strong> <code>[tiab]</code> searches Title and Abstract text; <code>[MeSH]</code> searches indexed subject headings.</li>
        </ul>
      </div>
      <div class="tutor-callout">
        <strong>Worked PubMed Search String Example:</strong><br>
        <code>("Hypertension"[MeSH] OR "High Blood Pressure"[tiab]) AND ("Telemedicine"[MeSH] OR "mHealth"[tiab]) AND ("Medication Adherence"[MeSH])</code>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Casual Google searches produce cherry-picked citations. A reproducible biomedical search combines MeSH descriptors with free-text title/abstract keywords bundled using Boolean logic.
      </div>
      <div class="tutor-citation">📚 National Library of Medicine PubMed Training Manual | PRISMA 2020 Search Reporting Guidelines</div>
    `
  },
  {
    id: "evidence_hierarchy_ebm_pyramid",
    topic: "The Evidence-Based Medicine (EBM) Hierarchy of Evidence",
    category: "Research Methods & Bioethics",
    source: "Guyatt & Sackett Evidence-Based Medicine & Cochrane Collaboration",
    keywords: ["evidence hierarchy", "ebm pyramid", "systematic review", "meta analysis", "cochrane", "levels of evidence", "critical appraisal", "forest plot", "evidence based medicine"],
    synonyms: ["ebm hierarchy", "levels of evidence pyramid", "systematic reviews meta-analysis"],
    takeaway: "Systematic Reviews and Meta-Analyses of RCTs reside at the apex of the evidence pyramid; expert opinions and narrative editorials sit at the base.",
    followups: ["Research Question Formulation: PICO & FINER", "Systematic Literature Searching: MeSH & Boolean", "Scientific Paper Structuring: IMRaD"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">RESEARCH METHODS &amp; BIOETHICS</span>
        <h3 class="tutor-title">The Evidence-Based Medicine (EBM) Pyramid</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The 7 Levels of Scientific Evidence</div>
        <p>In Evidence-Based Medicine, study designs are ranked by their ability to establish truth and eliminate bias:</p>
        <ol>
          <li><strong>Level 1 (Apex — Highest Validity): Systematic Reviews &amp; Meta-Analyses of RCTs:</strong> Comprehensive, reproducible identification and mathematical pooling (Forest plot) of all randomized trials globally. Cochrane reviews set the international gold standard.</li>
          <li><strong>Level 2: Critically Appraised Individual RCTs:</strong> Well-designed randomized trials with adequate power, blinding, and intention-to-treat analysis.</li>
          <li><strong>Level 3: Prospective Cohort Studies:</strong> Longitudinal observational tracking of exposure cohorts; vulnerable to residual confounding.</li>
          <li><strong>Level 4: Case-Control Studies:</strong> Retrospective comparison of cases and controls; prone to recall and selection bias.</li>
          <li><strong>Level 5: Cross-Sectional Studies / Surveys:</strong> Snapshot prevalence assessments subject to temporal ambiguity.</li>
          <li><strong>Level 6: Case Series &amp; Case Reports:</strong> Anecdotal observations of unusual patient trajectories without comparison groups.</li>
          <li><strong>Level 7 (Base — Lowest Scientific Grade): Expert Opinion &amp; Narrative Editorials:</strong> Subjective clinical commentary heavily vulnerable to personal bias and cognitive heuristics.</li>
        </ol>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> When establishing hospital clinical protocols or public health policies, prioritize Level 1 Systematic Reviews and Level 2 RCTs over senior clinical opinions.
      </div>
      <div class="tutor-citation">📚 Guyatt et al. (2015) Users' Guides to the Medical Literature: A Manual for Evidence-Based Clinical Practice</div>
    `
  },
  {
    id: "scientific_writing_imrad_referencing",
    topic: "Scientific Paper Structuring: IMRaD & Referencing Styles",
    category: "Research Methods & Bioethics",
    source: "ICMJE Uniform Requirements & APA / Vancouver Referencing Manuals",
    keywords: ["imrad", "scientific writing", "introduction methods results discussion", "vancouver style", "apa style", "reference managers", "zotero", "mendeley", "dissertation structure"],
    synonyms: ["manuscript structure", "vancouver vs apa", "imrad guidelines"],
    takeaway: "IMRaD structure: Introduction (Why?), Methods (How?), Results (What was found?), Discussion (What does it mean?); use Vancouver for biomedical journals and APA for management.",
    followups: ["Research Question Formulation: PICO & FINER", "The Evidence Hierarchy & EBM Pyramid", "Research Integrity & Scientific Misconduct"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">RESEARCH METHODS &amp; BIOETHICS</span>
        <h3 class="tutor-title">Scientific Writing: The IMRaD Architecture &amp; Referencing</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The Four Pillars of the IMRaD Format</div>
        <ul>
          <li><strong>I — Introduction:</strong> <em>Why did you conduct the study?</em> Establishes background epidemiology, articulates the precise gap in existing literature, and concludes with an explicit hypothesis or objective.</li>
          <li><strong>M — Methods:</strong> <em>What did you do and how did you do it?</em> Detailed, replicable description of study design, clinical setting, participant inclusion/exclusion criteria, sample size calculations, ethics clearances, and statistical software tools.</li>
          <li><strong>R — Results:</strong> <em>What did you find?</em> Objective presentation of descriptive and inferential findings across clear tables and figures with exact p-values and 95% CIs. Strictly no personal interpretation here!</li>
          <li><strong>D — Discussion:</strong> <em>What do the findings mean?</em> Summarizes key discoveries, contextualizes results against global literature, explains underlying biological/policy mechanisms, details study limitations, and outlines clinical implications.</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📚 Biomedical Referencing Conventions</div>
        <ul>
          <li><strong>Vancouver Style (Numeric):</strong> Citations are numbered consecutively in the order they appear in text using brackets <code>[1]</code> or superscripts. End references are listed numerically. Standard in medicine and public health (ICMJE).</li>
          <li><strong>APA Style (Author-Date):</strong> In-text citations list author and year: <code>(Gordis, 2020)</code>. Common in behavioral, nursing, and hospital management literature.</li>
          <li><strong>Reference Management Software:</strong> Always use automated managers (Zotero, Mendeley, EndNote) to prevent manual numbering disasters during manuscript revisions.</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Results state what the data showed; Discussion interprets what the data means. Never mix interpretation into the Results section.
      </div>
      <div class="tutor-citation">📚 International Committee of Medical Journal Editors (ICMJE) Recommendations | Publication Manual of the APA</div>
    `
  },
  {
    id: "bioethics_four_principles",
    topic: "The Four Foundational Principles of Biomedical Ethics",
    category: "Research Methods & Bioethics",
    source: "Beauchamp & Childress Principles of Biomedical Ethics (8th Ed.)",
    keywords: ["bioethics", "four principles", "autonomy", "beneficence", "non-maleficence", "justice", "informed consent", "primum non nocere", "beauchamp childress"],
    synonyms: ["principlism", "core ethical principles", "medical ethics foundations"],
    takeaway: "The 4 core principles: Autonomy (self-determination & voluntary consent), Beneficence (positive benefit), Non-Maleficence (primum non nocere), and Justice (equitable fairness).",
    followups: ["ICMR Guidelines & IEC Governance", "Research Integrity & Scientific Misconduct", "PICO & FINER Research Frameworks"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">RESEARCH METHODS &amp; BIOETHICS</span>
        <h3 class="tutor-title">The Four Core Principles of Biomedical Ethics (Beauchamp &amp; Childress)</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The Universal Principlism Framework</div>
        <p>All clinical practice, health policy, and medical research is governed by four cardinal bioethical pillars:</p>
        <ol>
          <li><strong>1. Autonomy (Respect for Persons):</strong>
            <ul>
              <li>The moral obligation to respect an individual's right to self-determination and independent decision-making.</li>
              <li>Operationalized via <strong>Voluntary Informed Consent</strong>: full disclosure of experimental risks, benefits, and alternatives in easily comprehended vernacular language, free of coercion or undue financial inducement, with full liberty to withdraw at any point without clinical penalty.</li>
            </ul>
          </li>
          <li><strong>2. Beneficence:</strong>
            <ul>
              <li>The positive moral duty to act for the well-being and benefit of the patient or research participant.</li>
              <li>Requires maximizing physical, psychological, and social benefits while advancing medical science.</li>
            </ul>
          </li>
          <li><strong>3. Non-Maleficence (Primum Non Nocere — Above All, Do No Harm):</strong>
            <ul>
              <li>The negative moral duty to avoid inflicting intentional or negligent injury, suffering, or death.</li>
              <li>Requires minimizing experimental risks and establishing mandatory Data and Safety Monitoring Boards (DSMB) to halt trials immediately if toxicities emerge.</li>
            </ul>
          </li>
          <li><strong>4. Justice (Fairness &amp; Equity):</strong>
            <ul>
              <li>The moral obligation to ensure fair and equitable distribution of research burdens and benefits.</li>
              <li>Prohibits exploiting economically impoverished or marginalized communities for risky clinical trials whose expensive medical benefits will only accrue to wealthy demographics.</li>
            </ul>
          </li>
        </ol>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Informed consent is not merely a signed piece of paper; it is an ongoing moral contract ensuring true comprehension, voluntariness, and protection of dignity.
      </div>
      <div class="tutor-citation">📚 Beauchamp &amp; Childress: Principles of Biomedical Ethics (8th Ed.) | Oxford University Press</div>
    `
  },
  {
    id: "icmr_guidelines_iec_governance",
    topic: "ICMR National Ethical Guidelines (2017) & IEC Review Governance",
    category: "Research Methods & Bioethics",
    source: "ICMR National Ethical Guidelines for Biomedical and Health Research (2017)",
    keywords: ["icmr guidelines", "institutional ethics committee", "iec", "irb", "exemption from review", "expedited review", "full committee review", "serious adverse event", "sae reporting", "vulnerable populations"],
    synonyms: ["icmr ethical review", "iec composition", "ethics committee tiers"],
    takeaway: "ICMR 2017 defines 3 ethics review tiers: Exemption (negligible risk), Expedited (minimal risk), and Full Committee (more than minimal risk); IEC requires minimum 7 diverse members.",
    followups: ["The Four Principles of Biomedical Ethics", "Research Integrity & Scientific Misconduct", "PICO & FINER Research Frameworks"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">RESEARCH METHODS &amp; BIOETHICS</span>
        <h3 class="tutor-title">ICMR Ethical Guidelines (2017) &amp; Ethics Committee Governance</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Institutional Ethics Committee (IEC) Multidisciplinary Composition</div>
        <p>The ICMR 2017 Guidelines mandate that every biomedical IEC must maintain a minimum of <strong>7 members</strong> representing diverse perspectives:</p>
        <ol>
          <li><strong>Chairperson:</strong> Eminent external, non-affiliated academic or jurist.</li>
          <li><strong>Member Secretary:</strong> Senior faculty member from the host institution.</li>
          <li><strong>Basic Medical Scientist(s):</strong> Pharmacologist, microbiologist, or pathologist.</li>
          <li><strong>Clinician(s):</strong> Practicing medical/surgical consultants.</li>
          <li><strong>Legal Expert:</strong> Lawyer or retired judge.</li>
          <li><strong>Social Scientist / Ethicist / Philosopher:</strong> NGO representative or sociologist.</li>
          <li><strong>Lay Person:</strong> Literate non-medical community member reflecting public perceptions.</li>
        </ol>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📑 Three Tiers of Ethical Review</div>
        <ul>
          <li><strong>1. Exemption from Review:</strong> Research involving <em>negligible risk</em> (e.g. secondary analysis of anonymized public health datasets, routine hospital quality audits, educational curriculum testing).</li>
          <li><strong>2. Expedited Review:</strong> Research involving <em>no more than minimal risk</em> (e.g. non-invasive biological sampling like saliva or nail clippings, retrospective anonymized medical chart reviews, minor protocol amendments). Reviewed by a sub-committee.</li>
          <li><strong>3. Full Committee Review:</strong> Research involving <em>more than minimal risk</em>, interventional drug or device clinical trials, bio-banking, invasive biopsies, or research involving <strong>Vulnerable Populations</strong> (pregnant women, children, neonates, cognitively impaired individuals, prisoners, economically destitute patients).</li>
        </ul>
      </div>
      <div class="tutor-callout">
        <strong>⏱️ Serious Adverse Event (SAE) Mandate:</strong><br>
        All unexpected Serious Adverse Events (SAEs) occurring during clinical trials must be reported by the Principal Investigator to the IEC and regulatory authorities within <strong>24 hours</strong> of occurrence.
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Never begin data collection before securing formal written IEC approval; collecting research data without prior ethical clearance invalidates the study and violates ICMR regulations.
      </div>
      <div class="tutor-citation">📚 ICMR National Ethical Guidelines for Biomedical and Health Research Involving Human Participants (2017)</div>
    `
  },
  {
    id: "research_integrity_scientific_misconduct",
    topic: "Research Integrity, Misconduct (FFP) & Authorship Ethics",
    category: "Research Methods & Bioethics",
    source: "ICMR Policy on Research Integrity & Committee on Publication Ethics (COPE)",
    keywords: ["scientific misconduct", "research integrity", "plagiarism", "fabrication", "falsification", "ffp", "gift authorship", "ghost authorship", "cope", "icmje authorship"],
    synonyms: ["research fraud", "plagiarism guidelines", "authorship criteria icmje"],
    takeaway: "The three cardinal sins of scientific misconduct are Fabrication, Falsification, and Plagiarism (FFP); ICMJE mandates 4 criteria for legitimate academic authorship.",
    followups: ["ICMR Guidelines & IEC Governance", "The Four Principles of Biomedical Ethics", "Scientific Paper Structuring: IMRaD"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">RESEARCH METHODS &amp; BIOETHICS</span>
        <h3 class="tutor-title">Research Integrity, Misconduct (FFP) &amp; Authorship Ethics</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The Cardinal Sins: The FFP Misconduct Triad</div>
        <p>The global scientific community and ICMR strictly define research misconduct across three non-negotiable categories:</p>
        <ul>
          <li><strong>Fabrication:</strong> Making up data, patient records, or laboratory findings out of thin air and recording or reporting them as genuine experimental evidence.</li>
          <li><strong>Falsification:</strong> Manipulating research materials, equipment settings, or chemical processes, or altering, trimming, or selectively omitting outlier data points to falsely achieve statistical significance (p &lt; 0.05).</li>
          <li><strong>Plagiarism:</strong> Appropriating another researcher's ideas, processes, results, text, or figures without providing appropriate academic citation and attribution.</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">✍️ ICMJE Authorship: The 4 Non-Negotiable Criteria</div>
        <p>To qualify as a co-author on a scientific publication, an individual must satisfy ALL four criteria:</p>
        <ol>
          <li>Substantial contributions to the conception or design of the work; OR the acquisition, analysis, or interpretation of data.</li>
          <li>Drafting the intellectual manuscript OR critically revising it for crucial intellectual content.</li>
          <li>Final approval of the version to be published.</li>
          <li>Agreement to be accountable for all aspects of the work in ensuring that questions related to accuracy or integrity are properly investigated and resolved.</li>
        </ol>
      </div>
      <div class="tutor-callout">
        <strong>⚠️ Unethical Authorship Practices:</strong><br>
        • <strong>Gift / Guest Authorship:</strong> Adding department heads, senior clinicians, or friends who made no intellectual contribution to the research.<br>
        • <strong>Ghost Authorship:</strong> Omitting corporate medical writers or junior biostatisticians who drafted substantial portions of the manuscript.
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Simply providing departmental office space, clinical funding, or routine patient blood samples does NOT qualify someone for academic authorship.
      </div>
      <div class="tutor-citation">📚 ICMR Policy on Research Integrity (2019) | Committee on Publication Ethics (COPE) Guidelines</div>
    `
  },
  {
    id: "health_economics_cost_effectiveness_qaly",
    topic: "Health Economics: Cost-Effectiveness, QALYs & DALYs",
    category: "Health Economics & Policy",
    source: "Drummond Methods for Economic Evaluation of Health Care Programmes & PHC508A",
    keywords: ["health economics", "cost effectiveness analysis", "cea", "qaly", "quality adjusted life years", "daly", "disability adjusted life years", "icer", "cost benefit analysis", "cba", "cost utility"],
    synonyms: ["economic evaluations", "icer formula", "qaly vs daly"],
    takeaway: "Cost-Utility Analysis (CUA) measures outcomes in QALYs or DALYs, allowing cross-comparisons between completely different clinical and public health interventions.",
    followups: ["Ayushman Bharat & PM-JAY", "Social Determinants of Health", "4 Levels of Prevention"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">HEALTH ECONOMICS &amp; POLICY</span>
        <h3 class="tutor-title">Health Economics: CEA, QALYs, DALYs &amp; ICER</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The Taxonomy of Economic Evaluations</div>
        <p>Health economics systematically compares the inputs (costs in ₹/$) against outputs (health consequences) across alternative interventions:</p>
        <ul>
          <li><strong>Cost-Effectiveness Analysis (CEA):</strong> Costs measured in monetary units; outcomes measured in natural biological units (e.g. Cost per life-year gained; Cost per mmHg reduction in systolic blood pressure).</li>
          <li><strong>Cost-Utility Analysis (CUA):</strong> Costs measured in monetary units; outcomes measured in standardized composite utility units:
            <ul>
              <li><strong>Quality-Adjusted Life Years (QALY):</strong> Combines quantity (length) and quality of life (utility score: 0.0 = death, 1.0 = perfect health). <code>QALY = Additional Life Years × Utility Weight</code>.</li>
              <li><strong>Disability-Adjusted Life Years (DALY):</strong> Measures gap from ideal health: <code>DALY = Years of Life Lost (YLL) + Years Lived with Disability (YLD)</code>. One DALY represents one lost year of healthy life.</li>
            </ul>
          </li>
          <li><strong>Cost-Benefit Analysis (CBA):</strong> Both costs AND health benefits are completely monetized into currency units (calculates net economic benefit: <code>Benefits - Costs &gt; 0</code>).</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📊 The Incremental Cost-Effectiveness Ratio (ICER)</div>
        <p><code>ICER = (Cost of Intervention B - Cost of Intervention A) / (Effect of Intervention B - Effect of Intervention A) = ΔCost / ΔEffect</code></p>
        <p><strong>Willingness-to-Pay Benchmark (WHO Threshold):</strong> An intervention is deemed highly cost-effective if its ICER per QALY/DALY is less than 1 to 3 times the country's Gross Domestic Product (GDP) per capita.</p>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> QALYs and DALYs allow health ministers to directly compare whether public health funds are better spent on neonatal intensive care vs. community hypertension screening.
      </div>
      <div class="tutor-citation">📚 Drummond et al. (2015) Methods for the Economic Evaluation of Health Care Programmes (4th Ed.)</div>
    `
  },
  {
    id: "environmental_occupational_health_standards",
    topic: "Environmental & Occupational Health Standards (AQI & Worker Safety)",
    category: "Environmental & Occupational Health",
    source: "Park's PSM (28th Ed.) Ch. 14 & Factories Act 1948",
    keywords: ["environmental health", "occupational health", "aqi", "air quality index", "silicosis", "pneumoconiosis", "ergonomics", "hospital occupational safety", "needle stick injury", "pep"],
    synonyms: ["occupational diseases", "air quality index health effects", "post exposure prophylaxis"],
    takeaway: "Occupational diseases are 100% preventable; for hospital needle-stick injuries, initiate Post-Exposure Prophylaxis (PEP) within 2 hours of exposure.",
    followups: ["NABH Accreditation & Patient Safety", "4 Levels of Prevention", "Social Determinants of Health"],
    contentHtml: `
      <div class="tutor-header">
        <span class="tutor-cat-badge">ENVIRONMENTAL &amp; OCCUPATIONAL HEALTH</span>
        <h3 class="tutor-title">Environmental Health, AQI &amp; Occupational Medicine</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Air Quality Index (AQI) &amp; Human Pathology</div>
        <p>The National Air Quality Index (AQI) transforms complex ambient air pollutants into a standardized numerical metric based on six key criteria pollutants: $PM_{2.5}, PM_{10}, NO_2, SO_2, CO,$ and $O_3$:</p>
        <ul>
          <li><code>0 to 50: Good</code> | <code>51 to 100: Satisfactory</code></li>
          <li><code>101 to 200: Moderate</code> (induces breathing discomfort in asthmatics)</li>
          <li><code>201 to 300: Poor</code> | <code>301 to 400: Very Poor</code> (respiratory illness on prolonged exposure)</li>
          <li><code>401 to 500: Severe</code> (triggers cardiovascular crises, stroke, and exacerbates COPD in healthy populations).</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">🏭 Major Occupational Pneumoconioses</div>
        <ul>
          <li><strong>Silicosis:</strong> Caused by crystalline silica dust in stone quarrying, sandblasting, and glass manufacturing; causes progressive pulmonary fibrosis and quadruples tuberculosis risk.</li>
          <li><strong>Asbestosis:</strong> Mining and construction insulation; linked to malignant mesothelioma and bronchogenic carcinoma.</li>
          <li><strong>Byssinosis:</strong> Cotton and textile mill dust; characterized by progressive "Monday morning chest tightness".</li>
          <li><strong>Anthracosis:</strong> Coal workers' pneumoconiosis ("black lung disease").</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title red">💉 Healthcare Worker Safety: Needle-Stick Protocol</div>
        <p>Following accidental hollow-bore needle-stick exposure to high-risk blood: wash wound immediately with soap and water (do NOT squeeze or suck); determine source patient status; initiate HIV <strong>Post-Exposure Prophylaxis (PEP) ideally within 2 hours</strong> (maximum 72 hours) and complete full 28-day regimen; administer Hepatitis B immunoglobulin and booster to non-immune workers.</p>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Occupational diseases are entirely man-made and 100% preventable through engineering controls (wet drilling, local exhaust ventilation) and personal protective equipment.
      </div>
      <div class="tutor-citation">📚 Park's PSM (28th Ed.) Chapter 14: Occupational Health | Central Pollution Control Board (CPCB) Guidelines</div>
    `
  }
  ,
  {
    id: "medical_word_building_etymology",
    topic: "Medical Word Building: Roots, Combining Vowels, Prefixes & Suffixes",
    category: "Medical Terminology & Coding",
    source: "Medical Terminology for Healthcare Professions (Greene) Ch. 1-2 & Medical English Unit 1",
    keywords: ["word building", "etymology", "root word", "combining vowel", "combining form", "prefix", "suffix", "greek latin", "rules of word building", "morphology", "medical terms", "deconstruction"],
    synonyms: ["word parts", "morphemes", "combining vowels", "medical roots", "greek roots", "latin roots", "word construction"],
    takeaway: "Medical terms are algorithmic formulas: read from the suffix backwards to the prefix and root; keep combining vowel 'o' between roots and before consonants, but drop it before vowel suffixes.",
    followups: ["Anatomical Position & Directional Planes", "Diagnostic & Surgical Suffixes", "ICD-10 & ICD-11 Architecture"],
    contentHtml: `
<div class="tutor-header">
        <span class="tutor-cat-badge">MEDICAL TERMINOLOGY &amp; CODING</span>
        <h3 class="tutor-title">Foundations of Medical Word Building: Morphological Architecture</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Linguistic Heritage &amp; Structural Components</div>
        <p>Over 90% of medical vocabulary derives from ancient Greek and Latin:</p>
        <ul>
          <li><strong>Greek Roots:</strong> Historically used for clinical conditions, pathology, diseases, and diagnosis (e.g., <em>nephr/o</em> for kidney disease, <em>cardi/o</em> for heart disease, <em>gastr/o</em> for stomach).</li>
          <li><strong>Latin Roots:</strong> Historically used for anatomical structures, organs, and physiological descriptions (e.g., <em>ren/al</em> for kidney anatomy, <em>cor/poris</em> for body, <em>pulmo/nis</em> for lung).</li>
        </ul>
        <p>Every medical term contains up to four structural building blocks:</p>
        <ol>
          <li><strong>Word Root:</strong> The core semantic foundation denoting an anatomical organ, tissue, or physiological system.</li>
          <li><strong>Combining Vowel:</strong> A connecting vowel (almost always <em>-o-</em>, rarely <em>-i-</em> or <em>-e-</em>) inserted between word parts to ease phonetic pronunciation. The root plus combining vowel is termed the <strong>Combining Form</strong> (e.g., <em>cardi/o</em>, <em>gastr/o</em>).</li>
          <li><strong>Prefix:</strong> A morpheme attached to the <em>beginning</em> of a term modifying its location, direction, number, time, or negation (e.g., <em>sub-</em>, <em>hyper-</em>, <em>tachy-</em>, <em>post-</em>).</li>
          <li><strong>Suffix:</strong> A morpheme attached to the <em>end</em> of a term denoting a pathology, symptom, surgical intervention, or diagnostic procedure (e.g., <em>-itis</em>, <em>-ectomy</em>, <em>-megaly</em>, <em>-scopy</em>).</li>
        </ol>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📊 The Golden Rules of Combining Vowels</div>
        <ul>
          <li><strong>Rule 1 (Root + Suffix starting with a Consonant):</strong> Keep the combining vowel. <code>cardi/o + -megaly = Cardiomegaly</code> (enlargement of the heart).</li>
          <li><strong>Rule 2 (Root + Suffix starting with a Vowel):</strong> Drop the combining vowel. <code>gastr/o + -itis = Gastritis</code> (NOT gastroitis); <code>hepat/o + -ectomy = Hepatectomy</code>.</li>
          <li><strong>Rule 3 (Root + Root):</strong> Always retain the combining vowel between two roots, even if the second root starts with a vowel! <code>gastr/o + enter/o + -itis = Gastroenteritis</code>; <code>osteo/o + arthr/o + -pathy = Osteoarthropathy</code>.</li>
          <li><strong>Rule 4 (Prefixes):</strong> Prefixes attach directly to the front of the word and never require a combining vowel (e.g., <code>dys- + pnea = Dyspnea</code>; <code>endo- + cardi/o + -itis = Endocarditis</code>).</li>
        </ul>
      </div>
      <div class="tutor-callout">
        <strong>🔍 The Decoding Algorithm:</strong><br>
        To decipher an unfamiliar medical term, always read in reverse: start at the <strong>Suffix</strong>, jump to the <strong>Prefix</strong> (if present), and finish with the <strong>Word Root(s)</strong>.<br>
        <em>Example:</em> <code>Otorhinolaryngology</code> &rarr; <em>-logy</em> (study of) &rarr; <em>ot/o</em> (ear) &rarr; <em>rhin/o</em> (nose) &rarr; <em>laryng/o</em> (throat) = The study of diseases of the ear, nose, and throat.
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title green">🏥 Hospital Administration &amp; Patient Safety Applications</div>
        <ul>
          <li><strong>Preventing Sentinel Events:</strong> Confusing operative suffixes like <em>-centesis</em> (puncture to aspirate fluid) with <em>-desis</em> (surgical joint fusion) or <em>-otomy</em> (incision) with <em>-ostomy</em> (permanent stoma) leads to devastating surgical wrong-procedure incidents.</li>
          <li><strong>EHR &amp; Billing Accuracy:</strong> Medical coders and hospital billing specialists must deconstruct clinical documentation accurately to assign precise ICD-10-CM codes and avoid multi-million rupee claim denials under health assurance schemes like PM-JAY.</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Read medical terms from suffix backwards to prefix and roots. Combining vowel 'o' is retained between roots and before consonants, but dropped before vowels.
      </div>
      <div class="tutor-citation">📚 Medical Terminology for Healthcare Professions (Greene et al.) Ch. 1-2 | Medical English Unit 1</div>
    `
  },
  {
    id: "anatomical_position_planes_directional",
    topic: "Anatomical Position, Planes of Division, Directional Terms & Cavities",
    category: "Medical Terminology & Coding",
    source: "Medical English Unit 2 & Medical Terminology for Healthcare Professions Ch. 3",
    keywords: ["anatomical position", "directional terms", "sagittal plane", "coronal plane", "transverse plane", "axial", "superior inferior", "anterior posterior", "proximal distal", "body cavities", "abdominopelvic quadrants", "regions"],
    synonyms: ["anatomical planes", "body planes", "directional terminology", "anatomical orientation", "body quadrants", "nine regions"],
    takeaway: "Anatomical terms establish universal clinical coordinates: sagittal divides right/left, coronal divides front/back, transverse divides upper/lower; proximal/distal apply exclusively to limbs.",
    followups: ["Word Building & Etymology", "Systemic Terminology: Musculoskeletal", "TNM Cancer Staging Architecture"],
    contentHtml: `
<div class="tutor-header">
        <span class="tutor-cat-badge">MEDICAL TERMINOLOGY &amp; CODING</span>
        <h3 class="tutor-title">Anatomical Position, Geometric Planes &amp; Directional Coordinates</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Standard Anatomical Position</div>
        <p>All anatomical descriptions and directional vectors reference the standard <strong>Anatomical Position</strong>: the body standing erect, facing forward, arms at sides with palms turned anteriorly (facing forward), thumbs pointing outward, and feet slightly apart.</p>
        <ul>
          <li><strong>Right and Left:</strong> Always refers to the <em>patient's</em> right and left, never the clinical observer's!</li>
          <li><strong>Supine vs. Prone:</strong> <em>Supine</em> = lying on back, face upward; <em>Prone</em> = lying on abdomen, face downward.</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📐 The Three Fundamental Planes of Division</div>
        <ul>
          <li><strong>Sagittal Plane (Lateral):</strong> Vertical plane dividing the body into right and left portions. The <em>Midsagittal (Median)</em> plane creates equal right and left halves; <em>Parasagittal</em> planes create unequal portions.</li>
          <li><strong>Coronal (Frontal) Plane:</strong> Vertical plane running side to side, dividing the body into <strong>Anterior (Ventral / Front)</strong> and <strong>Posterior (Dorsal / Back)</strong> segments.</li>
          <li><strong>Transverse (Axial / Horizontal) Plane:</strong> Cross-sectional horizontal plane dividing the body into <strong>Superior (Upper / Cephalic)</strong> and <strong>Inferior (Lower / Caudal)</strong> segments (standard orientation of CT and MRI cross-sections).</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">🧭 Directional Axes &amp; Paired Opposites</div>
        <ul>
          <li><code>Superior / Inferior:</code> Toward the head / Toward the feet.</li>
          <li><code>Anterior (Ventral) / Posterior (Dorsal):</code> Toward the front of the body / Toward the back of the body.</li>
          <li><code>Medial / Lateral:</code> Toward the midline / Away from the midline toward the side.</li>
          <li><code>Proximal / Distal:</code> <em>Exclusively for extremities:</em> Nearer to the trunk or point of attachment / Farther from the trunk. (The elbow is proximal to the wrist; the ankle is distal to the knee).</li>
          <li><code>Superficial / Deep:</code> Toward the external body surface / Toward the internal core.</li>
        </ul>
      </div>
      <div class="tutor-callout">
        <strong>🗺️ Abdominopelvic Topography:</strong><br>
        <strong>4 Clinical Quadrants (centered at umbilicus):</strong> RUQ (liver, gallbladder), LUQ (stomach, spleen, pancreas), RLQ (appendix, cecum), LLQ (sigmoid colon).<br>
        <strong>9 Anatomical Regions:</strong> Right/Left Hypochondriac, Epigastric, Right/Left Lumbar, Umbilical, Right/Left Inguinal (Iliac), and Hypogastric (Suprapubic).
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Proximal and distal are reserved for extremities; coronal divides anterior/posterior; CT scans view transverse axial slices from the patient's feet looking up.
      </div>
      <div class="tutor-citation">📚 Medical English Unit 2: Talking About the Human Body | Medical Terminology for Healthcare Professions Ch. 3</div>
    `
  },
  {
    id: "cardiovascular_hemic_terminology",
    topic: "Cardiovascular & Hemic Terminology: Ischemia, Infarction & Hematology",
    category: "Medical Terminology & Coding",
    source: "Medical Terminology for Healthcare Professions Ch. 11-12 & Medical English Unit 7",
    keywords: ["cardiovascular terminology", "myocardial infarction", "atherosclerosis", "ischemia", "angina pectoris", "hematology", "erythrocyte", "leukocyte", "thrombocytopenia", "leukocytosis", "anemia", "hemostasis", "coagulation cascade", "troponin", "stemi"],
    synonyms: ["cardiac terminology", "heart disease terms", "hemic system", "blood terms", "ischemic heart disease", "coronary terminology", "hematologic terms"],
    takeaway: "Ischemia is deficient tissue perfusion (*isch-* = hold back, *-emia* = blood); Infarction is tissue death from lost arterial supply; Atherosclerosis is fibrofatty intimal plaque within arteries.",
    followups: ["Respiratory System Terminology", "Word Building & Etymology", "ICD-10 & ICD-11 Architecture"],
    contentHtml: `
<div class="tutor-header">
        <span class="tutor-cat-badge">MEDICAL TERMINOLOGY &amp; CODING</span>
        <h3 class="tutor-title">Cardiovascular &amp; Hemic Systems: Pathophysiology &amp; Terminology</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Cardiovascular Roots &amp; Ischemic Cascades</div>
        <p>Core roots include <code>cardi/o</code> (heart), <code>coron/o</code> (crown/encircling coronary vessels), <code>angi/o</code> / <code>vas/o</code> (vessel), <code>arteri/o</code> (artery), <code>phleb/o</code> / <code>ven/o</code> (vein), <code>ather/o</code> (fatty paste/plaque), and <code>thromb/o</code> (clot):</p>
        <ul>
          <li><strong>Arteriosclerosis vs. Atherosclerosis:</strong> <em>Arteriosclerosis</em> is the generalized umbrella term for arterial wall thickening, calcification, and loss of compliance. <em>Atherosclerosis</em> is the specific subtype caused by lipid-rich atheromatous plaques accumulating in the arterial intima.</li>
          <li><strong>Ischemia vs. Infarction:</strong> <em>Ischemia</em> (from Greek <em>ischein</em> = to hold back + <em>-emia</em> = blood condition) is inadequate blood supply and cellular hypoxia. <em>Infarction</em> is actual irreversible tissue necrosis resulting from prolonged complete arterial occlusion.</li>
          <li><strong>Acute Coronary Syndrome (ACS):</strong> Encompasses Unstable Angina, NSTEMI (Non-ST-Elevation Myocardial Infarction), and STEMI (ST-Elevation Myocardial Infarction), diagnosed via ECG ST elevation and elevated cardiac biomarkers (Troponin I, Troponin T, CK-MB).</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">🩸 Hematology &amp; Cellular Differentiation</div>
        <ul>
          <li><strong>Erythrocytes (RBCs):</strong> Transport oxygen via hemoglobin. Deficiency is <em>Anemia</em> (microcytic hypochromic, normocytic, macrocytic/megaloblastic). Abnormally elevated RBC count is <em>Polycythemia</em>.</li>
          <li><strong>Leukocytes (WBCs):</strong> Immune defense cells divided into granulocytes (neutrophils, eosinophils, basophils) and agranulocytes (lymphocytes, monocytes). Elevated WBC count is <em>Leukocytosis</em>; deficiency is <em>Leukopenia</em>.</li>
          <li><strong>Thrombocytes (Platelets):</strong> Cellular fragments vital for primary hemostasis. Deficiency is <em>Thrombocytopenia</em> (causes petechiae and bleeding diathesis); excess is <em>Thrombocytosis</em>.</li>
          <li><strong>Coagulopathy:</strong> Disruption of secondary hemostasis. Monitored by Prothrombin Time (PT/INR) for extrinsic pathway and activated Partial Thromboplastin Time (aPTT) for intrinsic pathway. Severe widespread intravascular clotting and bleeding is <em>Disseminated Intravascular Coagulation (DIC)</em>.</li>
        </ul>
      </div>
      <div class="tutor-callout">
        <strong>⚡ Suffix Differential:</strong><br>
        <code>-penia</code> = abnormal reduction/deficiency (e.g. Pancytopenia, Neutropenia).<br>
        <code>-cytosis</code> / <code>-philia</code> = abnormal increase/multiplication (e.g. Leukocytosis, Eosinophilia).<br>
        <code>-emia</code> = blood condition (e.g. Bacteremia, Uremia, Hypokalemia).
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Ischemia is reversible oxygen deprivation; infarction is irreversible myocardial death. -penia means too few cells; -cytosis or -philia means too many.
      </div>
      <div class="tutor-citation">📚 Medical Terminology for Healthcare Professions Ch. 11-12 | Gordis Epidemiology Ch. 6</div>
    `
  },
  {
    id: "respiratory_system_terminology",
    topic: "Respiratory System Terminology: Pulmonary Mechanics, Pathologies & Gas Exchange",
    category: "Medical Terminology & Coding",
    source: "Medical Terminology for Healthcare Professions Ch. 14 & Medical English Unit 8",
    keywords: ["respiratory terminology", "dyspnea", "hemoptysis", "atelectasis", "pneumothorax", "copd", "asthma", "spirometry", "fev1", "arterial blood gas", "hypoxemia", "hypercapnia", "pleural effusion", "abg"],
    synonyms: ["pulmonary terminology", "lung disease terms", "respiratory pathology", "breathing terms", "abg analysis", "pulmonary function test"],
    takeaway: "Hemoptysis is coughing blood from the lungs; Hematemesis is vomiting blood from the GI tract. Atelectasis is alveolar collapse (*atel/o* = incomplete, *-ectasis* = expansion).",
    followups: ["Cardiovascular & Hemic Terminology", "Diagnostic & Surgical Suffixes", "ICD-10 & ICD-11 Architecture"],
    contentHtml: `
<div class="tutor-header">
        <span class="tutor-cat-badge">MEDICAL TERMINOLOGY &amp; CODING</span>
        <h3 class="tutor-title">Respiratory System: Mechanics, Nomenclature &amp; Gas Exchange</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Core Respiratory Roots &amp; Ventilation Dynamics</div>
        <p>Key roots: <code>pulmon/o</code> / <code>pneumon/o</code> (lung), <code>pneum/o</code> (air/gas/lung), <code>bronch/o</code> (bronchus), <code>alveol/o</code> (alveolus), <code>pleur/o</code> (pleural membrane), <code>ox/o</code> (oxygen), <code>capn/o</code> (carbon dioxide), <code>spir/o</code> (breathing):</p>
        <ul>
          <li><strong>Breathing Suffixes (<em>-pnea</em>):</strong>
            <ul>
              <li><code>Dyspnea:</code> Subjective difficulty or distress in breathing.</li>
              <li><code>Orthopnea:</code> Inability to breathe comfortably unless sitting or standing erect (classic sign of left ventricular congestive heart failure).</li>
              <li><code>Tachypnea / Bradypnea:</code> Abnormally rapid (&gt;20 bpm) / abnormally slow (&lt;12 bpm) breathing rate.</li>
              <li><code>Apnea:</code> Temporary cessation of spontaneous respiration.</li>
            </ul>
          </li>
          <li><strong>Critical Distinctions:</strong>
            <ul>
              <li><code>Hemoptysis vs. Hematemesis:</code> <em>Hemoptysis</em> (-ptysis = spitting/coughing) is expectoration of bright red, frothy blood from the respiratory tract. <em>Hematemesis</em> (-emesis = vomiting) is regurgitation of dark, acidic coffee-ground blood from the gastrointestinal tract.</li>
              <li><code>Hypoxemia vs. Hypoxia:</code> <em>Hypoxemia</em> is low partial pressure of oxygen in arterial blood (PaO2 &lt;80 mmHg). <em>Hypoxia</em> is insufficient oxygen availability at the tissue/cellular level.</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">🫁 Pulmonary Pathologies &amp; Diagnostics</div>
        <ul>
          <li><strong>Atelectasis:</strong> Incomplete alveolar expansion or collapsed lung tissue (<em>atel/o</em> = imperfect/incomplete + <em>-ectasis</em> = stretching/dilation). Common post-operative complication due to shallow anesthesia breathing.</li>
          <li><strong>Pneumothorax vs. Hemothorax:</strong> Presence of free air vs. blood in the pleural cavity, destroying negative intrapleural pressure and collapsing the lung.</li>
          <li><strong>COPD (Chronic Obstructive Pulmonary Disease):</strong> Spectrum of progressive airflow limitation combining <em>Chronic Bronchitis</em> (chronic productive cough for 3 consecutive months over 2 years) and <em>Emphysema</em> (permanent alveolar wall destruction).</li>
          <li><strong>Spirometry Metrics:</strong> Forced Vital Capacity (FVC), Forced Expiratory Volume in 1 second (FEV1), and FEV1/FVC ratio (&lt;0.70 confirms obstructive defect).</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Hemoptysis originates above the vocal cords or bronchi; hematemesis originates below the esophagus. Atelectasis is alveolar collapse; pneumothorax is air in the pleural space.
      </div>
      <div class="tutor-citation">📚 Medical Terminology for Healthcare Professions Ch. 14 | Medical English Unit 8</div>
    `
  },
  {
    id: "gastrointestinal_hepatobiliary_terminology",
    topic: "Gastrointestinal & Hepatobiliary Terminology: Endoscopy, Cirrhosis & Stomas",
    category: "Medical Terminology & Coding",
    source: "Medical Terminology for Healthcare Professions Ch. 15 & Medical English Unit 9",
    keywords: ["gastrointestinal terminology", "cholelithiasis", "cholecystitis", "cirrhosis", "hepatitis", "dysphagia", "hematemesis", "melena", "endoscopy", "colostomy", "ileostomy", "peritonitis", "pancreatitis", "ercp", "portal hypertension"],
    synonyms: ["gi terms", "digestive terms", "hepatobiliary terms", "liver terminology", "gallbladder terms", "stoma terminology"],
    takeaway: "Dysphagia is difficulty swallowing (*-phagia*); Dysphasia is difficulty speaking (*-phasia*). -cholecyst- is gallbladder; -lithiasis is stone formation.",
    followups: ["Neurological & Musculoskeletal Terminology", "Diagnostic & Surgical Suffixes", "Hospital DRGs & Case-Mix"],
    contentHtml: `
<div class="tutor-header">
        <span class="tutor-cat-badge">MEDICAL TERMINOLOGY &amp; CODING</span>
        <h3 class="tutor-title">Gastrointestinal &amp; Hepatobiliary Systems: Clinical Nomenclature</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Alimentary &amp; Hepatobiliary Word Roots</div>
        <p>Core roots: <code>gastr/o</code> (stomach), <code>enter/o</code> (small intestine), <code>col/o</code> (colon), <code>hepat/o</code> (liver), <code>cholecyst/o</code> (gallbladder: <em>chol/e</em> = bile + <em>cyst/o</em> = bladder/sac), <code>choledoch/o</code> (common bile duct), <code>pancreat/o</code> (pancreas), <code>peritone/o</code> (peritoneal membrane):</p>
        <ul>
          <li><strong>Dysphagia vs. Dysphasia:</strong> <em>Dysphagia</em> (-phagia = eating/swallowing) is anatomical or neurological difficulty swallowing food or liquids. <em>Dysphasia</em> (-phasia = speech) is a neurological speech/language impairment from cerebral injury. Confusing them can lead to deadly aspiration!</li>
          <li><strong>Gallbladder Terminology:</strong>
            <ul>
              <li><code>Cholelithiasis:</code> Formation or presence of gallstones (<em>lith/o</em> = stone + <em>-iasis</em> = abnormal condition).</li>
              <li><code>Cholecystitis:</code> Inflammation of the gallbladder wall, typically triggered by an impacted stone in the cystic duct.</li>
              <li><code>Choledocholithiasis:</code> Migration of gallstones into the common bile duct, causing obstructive jaundice and acute cholangitis.</li>
            </ul>
          </li>
          <li><strong>Cirrhosis &amp; Portal Hypertension:</strong> End-stage hepatic fibrosis resulting in elevated portal venous pressure, manifesting as <em>Ascites</em> (peritoneal fluid accumulation), <em>Esophageal Varices</em> (engorged submucosal veins prone to massive upper GI hemorrhage), and <em>Hepatic Encephalopathy</em>.</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">🔬 Diagnostic Endoscopy &amp; Surgical Ostomies</div>
        <ul>
          <li><strong>Upper vs. Lower GI Bleeding:</strong> Upper GI hemorrhage presents as <em>Hematemesis</em> (vomiting blood) or <em>Melena</em> (tarry, foul-smelling black stool degraded by stomach acid). Lower GI hemorrhage presents as <em>Hematochezia</em> (fresh, bright red blood per rectum).</li>
          <li><strong>Diagnostic Scopes:</strong> <code>Esophagogastroduodenoscopy (EGD)</code> visualizes esophagus to duodenum; <code>Colonoscopy</code> examines rectum to cecum; <code>ERCP (Endoscopic Retrograde Cholangiopancreatography)</code> visualizes biliary tree using fluoroscopy.</li>
          <li><strong>Stomas (<em>-ostomy</em>):</strong> Surgical creation of an artificial external cutaneous opening: <code>Colostomy</code> (opening from colon through abdominal wall); <code>Ileostomy</code> (opening from distal ileum).</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Dysphagia (-phagia) is swallowing difficulty; Dysphasia (-phasia) is speech difficulty. -lithiasis means stones; -ostomy creates a surgical stoma.
      </div>
      <div class="tutor-citation">📚 Medical Terminology for Healthcare Professions Ch. 15 | Medical English Unit 9</div>
    `
  },
  {
    id: "neurological_musculoskeletal_terminology",
    topic: "Neurological & Musculoskeletal Terminology: Neuro-Trauma, GCS & Orthopedics",
    category: "Medical Terminology & Coding",
    source: "Medical Terminology for Healthcare Professions Ch. 8-10 & Medical English Units 5-6",
    keywords: ["neurological terminology", "musculoskeletal terminology", "glasgow coma scale", "gcs", "stroke", "cva", "aphasia", "hemiplegia", "hemiparesis", "osteoarthritis", "rheumatoid arthritis", "arthroplasty", "orif", "spondylosis"],
    synonyms: ["neuro terminology", "orthopedic terms", "cns terminology", "bone and joint terms", "stroke terminology", "paralysis terms"],
    takeaway: "-plegia is complete paralysis; -paresis is partial muscle weakness. Osteoarthritis is degenerative wear (-osis); Rheumatoid arthritis is autoimmune inflammation (-itis).",
    followups: ["Diagnostic & Surgical Suffixes", "ICD-10 & ICD-11 Architecture", "Hospital DRGs & Case-Mix"],
    contentHtml: `
<div class="tutor-header">
        <span class="tutor-cat-badge">MEDICAL TERMINOLOGY &amp; CODING</span>
        <h3 class="tutor-title">Neurological &amp; Musculoskeletal Systems: Clinical Lexicon</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Neurological Roots, Deficits &amp; Coma Scoring</div>
        <p>Key roots: <code>encephal/o</code> (brain), <code>cerebr/o</code> (cerebrum), <code>mening/o</code> (meninges), <code>myel/o</code> (spinal cord or bone marrow), <code>neur/o</code> (nerve), <code>radicul/o</code> (spinal nerve root):</p>
        <ul>
          <li><strong>Paralysis vs. Weakness Suffixes:</strong>
            <ul>
              <li><code>-plegia (Paralysis):</code> Total loss of voluntary motor function (e.g., <em>Hemiplegia</em> = paralysis of one side; <em>Paraplegia</em> = paralysis of lower extremities; <em>Quadriplegia / Tetraplegia</em> = paralysis of all four limbs).</li>
              <li><code>-paresis (Paresis):</code> Partial weakness or impaired motor strength (e.g., <em>Hemiparesis</em> = unilateral motor weakness following an ischemic stroke).</li>
            </ul>
          </li>
          <li><strong>Aphasia Classifications:</strong>
            <ul>
              <li><code>Expressive (Broca's) Aphasia:</code> Motor speech production is impaired; comprehension remains intact.</li>
              <li><code>Receptive (Wernicke's) Aphasia:</code> Fluent speech output devoid of meaning; auditory comprehension is severely damaged.</li>
            </ul>
          </li>
          <li><strong>Glasgow Coma Scale (GCS):</strong> Gold standard for traumatic brain injury assessment (scores 3 to 15):
            <code>GCS = Eye Opening (1-4) + Verbal Response (1-5) + Motor Response (1-6)</code>. Scores &le;8 define severe coma requiring immediate mechanical airway protection!
          </li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">🦴 Musculoskeletal &amp; Orthopedic Terminology</div>
        <ul>
          <li><strong>Osteo- Roots:</strong> <code>oste/o</code> (bone), <code>arthr/o</code> (joint), <code>chondr/o</code> (cartilage), <code>my/o</code> (muscle), <code>tendin/o</code> (tendon), <code>spondyl/o</code> (vertebra).</li>
          <li><strong>Osteoarthritis vs. Rheumatoid Arthritis:</strong>
            <ul>
              <li><em>Osteoarthritis (OA):</em> Progressive degenerative breakdown of articular cartilage (*-osis* = abnormal condition/wear). Non-inflammatory biomechanical wear-and-tear.</li>
              <li><em>Rheumatoid Arthritis (RA):</em> Chronic systemic autoimmune disorder targeting synovial membranes (*-itis* = inflammation), causing pannus formation, bone erosion, and symmetrical joint deformities.</li>
            </ul>
          </li>
          <li><strong>Orthopedic Interventions:</strong> <code>Arthroplasty</code> (surgical reconstruction or replacement of a joint, e.g., Total Knee Arthroplasty - TKA); <code>ORIF (Open Reduction and Internal Fixation)</code> (surgical realignment of fractured bone fragments secured with intramedullary nails, plates, and screws).</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> -plegia denotes total paralysis; -paresis denotes motor weakness. GCS &le; 8 mandates intubation. Osteoarthritis is wear-and-tear degeneration; rheumatoid arthritis is autoimmune inflammation.
      </div>
      <div class="tutor-citation">📚 Medical Terminology for Healthcare Professions Ch. 8-10 | The Lancet (Teasdale & Jennett, GCS)</div>
    `
  },
  {
    id: "diagnostic_surgical_oncology_tnm",
    topic: "Diagnostic Scopes, Surgical Suffixes & The TNM Oncology Staging System",
    category: "Medical Terminology & Coding",
    source: "Medical Terminology for Healthcare Professions Ch. 4, AJCC 8th Ed & WHO Classification of Tumours",
    keywords: ["tnm staging", "oncology terminology", "biopsy", "carcinoma in situ", "metastasis", "neoplasm", "mastectomy", "laparoscopy", "surgical suffixes", "pet ct", "histopathology", "grading vs staging", "ajcc"],
    synonyms: ["cancer staging", "tumor staging", "surgical terminology", "operative suffixes", "biopsy types", "oncology terms", "cancer terminology"],
    takeaway: "Carcinoma in situ (Tis) has zero metastatic potential because it has not crossed the basement membrane; Stage IV is defined by M1 (distant metastasis) regardless of tumor size.",
    followups: ["ICD-10 & ICD-11 Architecture", "CPT & SNOMED-CT Informatics", "Hospital DRGs & Case-Mix"],
    contentHtml: `
<div class="tutor-header">
        <span class="tutor-cat-badge">MEDICAL TERMINOLOGY &amp; CODING</span>
        <h3 class="tutor-title">Oncology Taxonomy, TNM Staging Architecture &amp; Surgical Suffixes</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Oncology Nomenclature &amp; Cellular Alterations</div>
        <p>Neoplasms (new abnormal tissue growths) are classified by anatomical histogenesis and biological behavior:</p>
        <ul>
          <li><strong>Carcinoma:</strong> Malignant tumor originating from epithelial tissue (85% of all human cancers; e.g., adenocarcinoma, squamous cell carcinoma). Spreads primarily via lymphatic channels.</li>
          <li><strong>Sarcoma:</strong> Malignant tumor arising from transformed mesenchymal/connective tissue (bone, cartilage, fat, muscle; e.g., osteosarcoma, liposarcoma). Spreads predominantly via hematogenous routes.</li>
          <li><strong>Cellular Transformations:</strong> <em>Hyperplasia</em> (increased cell count) &rarr; <em>Metaplasia</em> (reversible transformation into another cell type) &rarr; <em>Dysplasia</em> (disordered architectural growth / pre-cancerous atypia) &rarr; <em>Anaplasia</em> (loss of cellular differentiation, hallmark of aggressive cancer).</li>
          <li><strong>Carcinoma in situ (Tis):</strong> Severe dysplastic transformation confined strictly above the epithelial basement membrane. <em>Zero biological potential to metastasize</em> until the basement membrane is breached into the vascularized stroma!</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">📊 The AJCC / UICC TNM Staging Architecture</div>
        <p>Staging defines the anatomical extent of disease spread at diagnosis, determining prognosis and treatment protocols:</p>
        <ul>
          <li><strong>T (Primary Tumor):</strong> <code>Tis</code> (in situ), <code>T1 to T4</code> reflecting increasing physical tumor diameter and local invasion into adjacent visceral structures.</li>
          <li><strong>N (Regional Lymph Nodes):</strong> <code>N0</code> (no regional nodal metastasis), <code>N1 to N3</code> reflecting progressive number and anatomical distance of involved regional lymphatic basins.</li>
          <li><strong>M (Distant Metastasis):</strong> <code>M0</code> (no distant spread), <code>M1</code> (distant hematogenous metastasis to lungs, liver, bones, or brain). <em>The presence of M1 automatically converts any case to Stage IV disease!</em></li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title red">🔪 Master Guide to Surgical Operative Suffixes</div>
        <ul>
          <li><code>-ectomy:</code> Surgical excision / removal (e.g., Mastectomy, Cholecystectomy, Appendectomy).</li>
          <li><code>-otomy:</code> Surgical incision / cutting into (e.g., Laparotomy, Craniotomy, Thoracotomy).</li>
          <li><code>-ostomy:</code> Creation of a permanent or temporary surgical artificial opening (e.g., Tracheostomy, Colostomy).</li>
          <li><code>-plasty:</code> Surgical reconstruction or plastic repair (e.g., Rhinoplasty, Angioplasty, Arthroplasty).</li>
          <li><code>-scopy:</code> Visual inspection using an illuminated optical scope (e.g., Laparoscopy, Bronchoscopy).</li>
          <li><code>-centesis:</code> Surgical puncture to aspirate pathological fluid (e.g., Paracentesis, Thoracocentesis, Amniocentesis).</li>
          <li><code>-pexy:</code> Surgical fixation of a displaced or mobile organ (e.g., Orchiopexy, Nephropexy).</li>
          <li><code>-rrhaphy:</code> Surgical suturing or repair of tissue (e.g., Herniorrhaphy).</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Tis cannot metastasize because the basement membrane is intact; M1 instantly creates Stage IV cancer. -ectomy is removal; -otomy is incision; -ostomy is an artificial opening.
      </div>
      <div class="tutor-citation">📚 AJCC Cancer Staging Manual (8th Ed) | Medical Terminology for Healthcare Professions Ch. 4</div>
    `
  },
  {
    id: "icd10_icd11_clinical_coding_taxonomy",
    topic: "ICD-10-CM & ICD-11 Architecture: Diagnostic Coding Conventions & Extension Codes",
    category: "Medical Terminology & Coding",
    source: "WHO ICD-11 Official Reference Guide & AHIMA/AHA ICD-10-CM Guidelines",
    keywords: ["icd-10", "icd-11", "clinical coding", "diagnostic coding", "stem codes", "extension codes", "principal diagnosis", "secondary diagnosis", "alphanumeric code", "who nosology", "post-coordination", "abdm coding"],
    synonyms: ["disease classification", "icd codes", "who classification", "nosology", "morbidity coding", "mortality coding", "diagnostic classification"],
    takeaway: "ICD-10 uses 3-7 character alphanumeric codes; ICD-11 introduces digital-native stem codes combined with extension codes (& and /) for unprecedented post-coordination precision.",
    followups: ["CPT & SNOMED-CT Informatics", "Hospital DRGs & Case-Mix", "Word Building & Etymology"],
    contentHtml: `
<div class="tutor-header">
        <span class="tutor-cat-badge">MEDICAL TERMINOLOGY &amp; CODING</span>
        <h3 class="tutor-title">Clinical Diagnostic Coding: ICD-10-CM &amp; The ICD-11 Revolution</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 The Purpose &amp; Architecture of ICD-10-CM</div>
        <p>Maintained by the World Health Organization (WHO), the International Classification of Diseases (ICD) translates human morbidity and mortality into standardized alphanumeric codes for international public health epidemiology, hospital resource management, and insurance reimbursement:</p>
        <ul>
          <li><strong>Code Structure (3 to 7 characters):</strong>
            <ul>
              <li><code>Character 1 (Alpha):</code> Identifies the disease chapter (e.g., <strong>I</strong> = Circulatory, <strong>J</strong> = Respiratory, <strong>C</strong> = Neoplasms, <strong>E</strong> = Endocrine, <strong>K</strong> = Digestive).</li>
              <li><code>Characters 2 &amp; 3 (Numeric):</code> Define the core disease category (e.g., <code>I21</code> = Acute Myocardial Infarction; <code>E11</code> = Type 2 Diabetes Mellitus).</li>
              <li><code>Decimal Point:</code> Follows the third character.</li>
              <li><code>Characters 4 to 6 (Alphanumeric):</code> Define anatomical site, etiology, manifestations, and laterality (1 = right, 2 = left, 3 = bilateral).</li>
              <li><code>Character 7 (Extension):</code> Encodes encounter timing (A = initial encounter, D = subsequent, S = sequela).</li>
            </ul>
          </li>
          <li><strong>Coding Rules:</strong>
            <ul>
              <li><em>Principal Diagnosis:</em> The condition established after study to be chiefly responsible for occasioning the patient's admission to hospital.</li>
              <li><em>Secondary Diagnoses:</em> All comorbid conditions that co-exist at the time of admission or develop during treatment affecting patient care and length of stay.</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">🌐 The ICD-11 Digital-Native Paradigm Shift</div>
        <p>Adopted by the World Health Assembly, ICD-11 transitions global nosology into a digital, multi-lingual knowledge graph:</p>
        <ul>
          <li><strong>Poly-hierarchical Foundation Component:</strong> Over 100,000 entities interlinked semantically, allowing single diseases to exist across multiple clinical specialties.</li>
          <li><strong>Stem Codes:</strong> Standard core alphanumeric entities (4 characters; always includes a letter in the 2nd position, e.g., <code>BA81</code> for Acute Myocardial Infarction; <code>5A11</code> for Type 2 Diabetes).</li>
          <li><strong>Extension Codes &amp; Post-Coordination:</strong> Instead of creating thousands of redundant codes for every permutation, ICD-11 allows coders to combine a Stem Code with Extension Codes using special syntax:
            <ul>
              <li><code>&amp; (Ampersand):</code> Links clusters of clinical detail (e.g., linking Stem Code for lung cancer to anatomical subsite and laterality).</li>
              <li><code>/ (Slash):</code> Expresses dual coding (e.g., underlying chronic condition / acute manifestation).</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Principal diagnosis is the condition established after clinical study that necessitated admission. ICD-11 eliminates code explosion via stem codes and cluster post-coordination.
      </div>
      <div class="tutor-citation">📚 WHO ICD-11 Official Reference Guide | AHIMA ICD-10-CM Coding Handbook</div>
    `
  },
  {
    id: "cpt_snomed_ct_health_informatics",
    topic: "CPT Procedure Codes, SNOMED-CT Clinical Ontology & ABDM Interoperability",
    category: "Medical Terminology & Coding",
    source: "AMA CPT Manual, SNOMED International & Ayushman Bharat Digital Mission Standards",
    keywords: ["cpt", "snomed-ct", "health informatics", "clinical terminology", "hl7 fhir", "abdm", "electronic health records", "interoperability", "ndhb", "concept identifier", "procedural coding", "e-sanjeevani"],
    synonyms: ["procedure codes", "clinical terms", "snomed", "medical informatics", "health data exchange", "fhir standards", "cpt codes"],
    takeaway: "ICD classifies why the patient was admitted; CPT codes what procedure was performed; SNOMED-CT captures granular clinical bedside documentation; HL7 FHIR exchanges it seamlessly.",
    followups: ["ICD-10 & ICD-11 Architecture", "Hospital DRGs & Case-Mix", "Word Building & Etymology"],
    contentHtml: `
<div class="tutor-header">
        <span class="tutor-cat-badge">MEDICAL TERMINOLOGY &amp; CODING</span>
        <h3 class="tutor-title">Health Informatics: CPT Codes, SNOMED-CT &amp; Digital Interoperability</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Procedural Coding: AMA Current Procedural Terminology (CPT)</div>
        <p>While ICD codes capture patient <em>diagnoses</em>, procedural code systems capture healthcare <em>interventions</em>:</p>
        <ul>
          <li><strong>CPT Architecture:</strong> 5-digit numeric codes organized into 6 major clinical sections (Evaluation &amp; Management [99201-99499], Anesthesiology, Surgery, Radiology, Pathology/Laboratory, Medicine).</li>
          <li><strong>E/M (Evaluation and Management) Coding:</strong> Codes based on Medical Decision Making (MDM) complexity (Straightforward, Low, Moderate, High) or cumulative physician time spent on the encounter date.</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title blue">🧠 SNOMED-CT: The World's Clinical Semantic Ontology</div>
        <p>Unlike statistical classification systems like ICD that aggregate diseases into broad buckets, <strong>SNOMED-CT (Systematized Nomenclature of Medicine - Clinical Terms)</strong> is a fine-grained, ontological clinical terminology designed for real-time electronic health records (EHRs):</p>
        <ul>
          <li><strong>Concept Identifiers:</strong> Unique permanent numerical codes (e.g., <code>22298006</code> = Myocardial infarction).</li>
          <li><strong>Descriptions:</strong> Human-readable synonyms linked to a single Concept ID, eliminating ambiguous physician notes.</li>
          <li><strong>Relationships:</strong> Formal machine-readable semantic logic linking concepts (e.g., <em>Myocardial infarction</em> <strong>is-a</strong> <em>Necrosis of heart</em>, with <strong>finding site</strong> = <em>Myocardium structure</em>, and <strong>associated morphology</strong> = <em>Infarction</em>).</li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title green">🇮🇳 Ayushman Bharat Digital Mission (ABDM) Integration</div>
        <ul>
          <li><strong>The Interoperability Mandate:</strong> Under India's National Digital Health Blueprint (NDHB), hospitals empanelled with ABDM and PM-JAY must implement <strong>HL7 FHIR (Fast Healthcare Interoperability Resources)</strong> APIs.</li>
          <li><strong>The Ecosystem Division of Labor:</strong>
            <ul>
              <li><strong>Bedside Documentation:</strong> Captured natively using <strong>SNOMED-CT</strong> within the hospital EHR.</li>
              <li><strong>Exchange Standard:</strong> Structured into lightweight JSON resources via <strong>HL7 FHIR</strong>.</li>
              <li><strong>Billing &amp; DRG Grouper:</strong> Mapped automatically to <strong>ICD-10 / ICD-11</strong> and procedural fee schedules.</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> ICD is a classification system for statistics and billing; SNOMED-CT is a clinical ontology for real-time EHR notes; FHIR is the data transport protocol.
      </div>
      <div class="tutor-citation">📚 SNOMED International Technical Guide | National Digital Health Blueprint (MoHFW ABDM)</div>
    `
  },
  {
    id: "hospital_drg_casemix_ehr_abbreviations",
    topic: "Hospital Reimbursement: DRGs, Case-Mix Index (CMI) & Error-Prone Abbreviations",
    category: "Medical Terminology & Coding",
    source: "CMS DRG Manual, PM-JAY Health Benefit Packages 2.2 & ISMP Patient Safety List",
    keywords: ["drg", "diagnosis-related groups", "case-mix index", "cmi", "hospital reimbursement", "cc", "mcc", "prospective payment system", "do not use list", "error-prone abbreviations", "cdi", "pm-jay", "joint commission"],
    synonyms: ["drg billing", "case mix", "hospital payment", "prospective payment", "dangerous abbreviations", "clinical documentation improvement", "revenue cycle"],
    takeaway: "DRGs pay a fixed bundled rate based on Principal Diagnosis and CC/MCC status; CMI measures patient acuity; never use banned abbreviations like 'U' or trailing zeros '5.0 mg'.",
    followups: ["ICD-10 & ICD-11 Architecture", "CPT & SNOMED-CT Informatics", "Word Building & Etymology"],
    contentHtml: `
<div class="tutor-header">
        <span class="tutor-cat-badge">MEDICAL TERMINOLOGY &amp; CODING</span>
        <h3 class="tutor-title">Hospital Reimbursement: DRGs, Case-Mix Index &amp; Safe EHR Abbreviations</h3>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title">💡 Diagnosis-Related Groups (DRGs) &amp; Prospective Payment</div>
        <p>In modern hospital administration, historical inflationary Fee-for-Service billing has been replaced by <strong>Prospective Payment Systems (PPS)</strong> utilizing Diagnosis-Related Groups (DRGs):</p>
        <ul>
          <li><strong>How DRGs Function:</strong> Inpatients with similar clinical diagnoses, surgical procedures, and resource consumption patterns are grouped into a single DRG code. The hospital receives a <em>predetermined fixed bundled payment</em> for the entire inpatient episode, regardless of actual days stayed.</li>
          <li><strong>The CC / MCC Severity Tiering:</strong>
            <ul>
              <li><code>Without CC/MCC:</code> Lowest complexity and reimbursement.</li>
              <li><code>With CC (Complication or Comorbidity):</code> Moderate increase in clinical resource intensity (e.g., chronic hypertension with stable diabetes).</li>
              <li><code>With MCC (Major Complication or Comorbidity):</code> Massive escalation in clinical acuity and costs (e.g., acute renal failure, septic shock, ventilator dependency &gt;96 hours).</li>
            </ul>
          </li>
          <li><strong>Case-Mix Index (CMI):</strong> The weighted average of all DRG Relative Weights (RW) treated by a hospital during a fiscal period:
            <code>CMI = (Sum of all DRG Relative Weights) / (Total Number of Discharges)</code>. A higher CMI reflects a sicker patient population requiring higher hospital capitation budgets.
          </li>
        </ul>
      </div>
      <div class="tutor-section">
        <div class="tutor-sec-title red">⚠️ The Official ISMP / Joint Commission 'Do Not Use' Safety List</div>
        <p>Over 7,000 patient deaths occur annually worldwide due to illegible or ambiguous clinical abbreviations in electronic and paper health records:</p>
        <ul>
          <li><code>U or u (unit):</code> Mistaken for '0' (zero), '4', or 'cc'. <strong>BANNED.</strong> Always write <strong>unit</strong>.</li>
          <li><code>IU (International Unit):</code> Mistaken for 'IV' (intravenous) or '10'. <strong>BANNED.</strong> Always write <strong>International Unit</strong>.</li>
          <li><code>Q.D. / QD / qd (daily):</code> Mistaken for QOD (every other day) or vice versa. <strong>BANNED.</strong> Always write <strong>daily</strong> or <strong>every other day</strong>.</li>
          <li><code>Trailing Zero (e.g. 5.0 mg):</code> If the decimal point is missed on a tablet screen or carbon copy, <em>5.0 mg is read as 50 mg</em> (fatal 10-fold overdose!). <strong>BANNED.</strong> Always write <strong>5 mg</strong>.</li>
          <li><code>Omission of Leading Zero (e.g. .5 mg):</code> Read as 5 mg. <strong>BANNED.</strong> Always write <strong>0.5 mg</strong>.</li>
          <li><code>MS / MSO4 / MgSO4:</code> Confused between Morphine Sulfate and Magnesium Sulfate. <strong>BANNED.</strong> Always write full generic medication names.</li>
        </ul>
      </div>
      <div class="tutor-takeaway">
        <strong>📌 Key Takeaway:</strong> Proper documentation of MCCs/CCs prevents hospital underpayment under DRG prospective payment. Trailing zeros ('5.0 mg') and 'U' abbreviations are deadly and strictly prohibited.
      </div>
      <div class="tutor-citation">📚 CMS DRG Manual | ISMP List of Error-Prone Abbreviations | PM-JAY HBP 2.2 Operational Guidelines</div>
    `
  },
];

// Export for module systems or browser window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { kb };
}
