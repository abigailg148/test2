// Extensive question bank based on past exam paper style questions
// Each topic has 10+ questions for thorough practice

const topics = {
    'edexcel-maths': [
        'Pure Maths: Algebra and Functions',
        'Pure Maths: Coordinate Geometry',
        'Pure Maths: Sequences and Series',
        'Pure Maths: Trigonometry',
        'Pure Maths: Exponentials and Logarithms',
        'Pure Maths: Differentiation',
        'Pure Maths: Integration',
        'Pure Maths: Vectors',
        'Statistics: Probability',
        'Statistics: Statistical Distributions',
        'Mechanics: Kinematics',
        'Mechanics: Forces and Newton\'s Laws'
    ],
    'edexcel-further-maths': [
        'Further Pure: Complex Numbers',
        'Further Pure: Matrices',
        'Further Pure: Differential Equations',
        'Further Stats 1: Discrete Random Variables',
        'Further Stats 1: Poisson Distribution',
        'Further Mechanics 1: Work, Energy and Power'
    ],
    'ocr-cs': [
        'Component 1: Data Types',
        'Component 1: Boolean Algebra',
        'Component 1: Algorithms',
        'Component 2: Databases',
        'Component 2: Operating Systems'
    ]
};

const questionBank = {
    'edexcel-maths': {
        'Pure Maths: Algebra and Functions': [
            {
                question: "Solve the equation 2x² + 5x - 3 = 0 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use quadratic formula or factorization\nM1: Correct working shown\nA1: x = 1/2 or x = -3"
            },
            {
                question: "Express x² - 6x + 2 in the form (x - a)² + b [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Half the coefficient of x to get a = 3\nM1: Calculate (x - 3)² = x² - 6x + 9\nA1: (x - 3)² - 7"
            },
            {
                question: "Factorise completely 3x² - 12 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Take out common factor 3\nA1: 3(x + 2)(x - 2)"
            },
            {
                question: "Solve the simultaneous equations: 2x + y = 7 and x - y = 2 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Eliminate one variable\nM1: Solve for one variable (x = 3)\nA1: Find second variable (y = 1)"
            },
            {
                question: "Solve the inequality 3x - 5 < 10 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Rearrange correctly (3x < 15)\nA1: x < 5"
            },
            {
                question: "Given f(x) = 2x + 3 and g(x) = x², find fg(x) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: fg(x) = f(g(x)) = f(x²)\nA1: 2x² + 3"
            },
            {
                question: "Solve 5x² = 45 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Divide to get x² = 9\nA1: x = ±3"
            },
            {
                question: "The function f is defined by f(x) = 3x - 1. Find f⁻¹(x) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Let y = 3x - 1\nM1: Rearrange for x\nA1: f⁻¹(x) = (x + 1)/3"
            },
            {
                question: "Simplify (2x³)² × 3x⁴ [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Expand to get 4x⁶ × 3x⁴\nA1: 12x¹⁰"
            },
            {
                question: "Solve the equation |2x - 3| = 5 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Set up two equations: 2x - 3 = 5 or 2x - 3 = -5\nM1: Solve first equation (x = 4)\nA1: Solve second equation (x = -1)"
            },
            {
                question: "Express 2/(x-1) + 3/(x+2) as a single fraction [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Common denominator (x-1)(x+2)\nM1: Combine numerators 2(x+2) + 3(x-1)\nA1: (5x+1)/[(x-1)(x+2)]"
            },
            {
                question: "Solve x² + 4x - 1 = 0 giving your answers in surd form [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use quadratic formula\nM1: x = (-4 ± √20)/2\nA1: x = -2 ± √5"
            }
        ],
        'Pure Maths: Coordinate Geometry': [
            {
                question: "Find the equation of the line passing through (2, 3) with gradient -2 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use y - y₁ = m(x - x₁)\nA1: y = -2x + 7"
            },
            {
                question: "Find the gradient of the line joining A(1, 4) and B(3, 10) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: m = (y₂ - y₁)/(x₂ - x₁)\nA1: m = 3"
            },
            {
                question: "A circle has equation (x - 2)² + (y + 3)² = 25. State the centre and radius [2 marks]",
                totalMarks: 2,
                markScheme: "B1: Centre (2, -3)\nB1: Radius 5"
            },
            {
                question: "Find the equation of the line perpendicular to y = 2x + 1 passing through (4, 5) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Perpendicular gradient = -1/2\nM1: Use point-slope form\nA1: y = -x/2 + 7"
            },
            {
                question: "Find the distance between A(1, 2) and B(4, 6) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: √[(4-1)² + (6-2)²]\nA1: 5"
            },
            {
                question: "Find the midpoint of the line segment joining P(-2, 5) and Q(4, 1) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use midpoint formula\nA1: (1, 3)"
            },
            {
                question: "The line L passes through (3, 2) and is parallel to y = 4x - 1. Find the equation of L [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Same gradient m = 4\nA1: y = 4x - 10"
            },
            {
                question: "Find the equation of the circle with centre (1, -2) and radius 3 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use (x - a)² + (y - b)² = r²\nA1: (x - 1)² + (y + 2)² = 9"
            },
            {
                question: "Show that the points A(0, 2), B(3, 5) and C(6, 8) are collinear [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Find gradient AB = 1\nM1: Find gradient BC = 1\nA1: Gradients equal so collinear"
            },
            {
                question: "Find the equation of the perpendicular bisector of the line segment AB where A = (1, 3) and B = (5, 7) [4 marks]",
                totalMarks: 4,
                markScheme: "M1: Find midpoint (3, 5)\nM1: Find gradient of AB = 1\nM1: Perpendicular gradient = -1\nA1: y = -x + 8"
            },
            {
                question: "The line 3x + 4y = 12 meets the x-axis at A and the y-axis at B. Find the length AB [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Find A(4, 0) and B(0, 3)\nM1: Use distance formula\nA1: 5"
            },
            {
                question: "Find the equation of the tangent to the circle x² + y² = 25 at the point (3, 4) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Gradient of radius = 4/3\nM1: Tangent gradient = -3/4\nA1: 3x + 4y = 25"
            }
        ],
        'Pure Maths: Sequences and Series': [
            {
                question: "An arithmetic sequence has first term 5 and common difference 3. Find the 10th term [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use uₙ = a + (n-1)d\nA1: u₁₀ = 32"
            },
            {
                question: "A geometric sequence has first term 2 and common ratio 3. Find the sum of the first 5 terms [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use Sₙ = a(rⁿ - 1)/(r - 1)\nM1: Substitute values\nA1: S₅ = 242"
            },
            {
                question: "Find the sum of the first 20 terms of the arithmetic sequence 3, 7, 11, 15, ... [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Identify a = 3, d = 4\nM1: Use Sₙ = n/2[2a + (n-1)d]\nA1: S₂₀ = 820"
            },
            {
                question: "A geometric series has first term 8 and common ratio 1/2. Find the sum to infinity [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use S∞ = a/(1-r)\nA1: S∞ = 16"
            },
            {
                question: "The sum of the first n terms of a sequence is given by Sₙ = 2n² + 3n. Find the 5th term [3 marks]",
                totalMarks: 3,
                markScheme: "M1: u₅ = S₅ - S₄\nM1: Calculate S₅ = 65 and S₄ = 44\nA1: u₅ = 21"
            },
            {
                question: "Expand (1 + 2x)⁴ using the binomial theorem [4 marks]",
                totalMarks: 4,
                markScheme: "M1: Use binomial coefficients\nM1: (1) + 4(2x) + 6(2x)²\nM1: + 4(2x)³ + (2x)⁴\nA1: 1 + 8x + 24x² + 32x³ + 16x⁴"
            },
            {
                question: "Find the coefficient of x³ in the expansion of (2 + x)⁵ [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use ⁵C₃(2)²(x)³\nM1: Calculate ⁵C₃ = 10\nA1: Coefficient = 40"
            },
            {
                question: "The nth term of a sequence is given by uₙ = 3n - 1. Find the sum of the first 50 terms [3 marks]",
                totalMarks: 3,
                markScheme: "M1: This is arithmetic with a = 2, d = 3\nM1: Use Sₙ = n/2[2a + (n-1)d]\nA1: S₅₀ = 3775"
            },
            {
                question: "A geometric series has first term 5 and sum to infinity 20. Find the common ratio [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use S∞ = a/(1-r)\nM1: 20 = 5/(1-r)\nA1: r = 3/4 or 0.75"
            },
            {
                question: "Find the sum: 2 + 5 + 8 + 11 + ... + 98 [4 marks]",
                totalMarks: 4,
                markScheme: "M1: Arithmetic sequence with a = 2, d = 3\nM1: Find n using 98 = 2 + (n-1)×3, so n = 33\nM1: Use Sₙ = n/2(first + last)\nA1: S₃₃ = 1650"
            },
            {
                question: "The 3rd term of a geometric sequence is 12 and the 6th term is 96. Find the first term [4 marks]",
                totalMarks: 4,
                markScheme: "M1: u₃ = ar² = 12 and u₆ = ar⁵ = 96\nM1: Divide to get r³ = 8\nM1: r = 2\nA1: a = 3"
            },
            {
                question: "Prove that the sum of the first n odd numbers is n² [4 marks]",
                totalMarks: 4,
                markScheme: "M1: Odd numbers form sequence 1, 3, 5, ..., (2n-1)\nM1: Arithmetic with a = 1, d = 2, last term = 2n-1\nM1: Sₙ = n/2(1 + 2n - 1)\nA1: Sₙ = n²"
            }
        ],
        'Pure Maths: Trigonometry': [
            {
                question: "Convert 120° to radians [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use π radians = 180°\nA1: 2π/3 radians"
            },
            {
                question: "Solve sin(x) = 0.5 for 0° ≤ x ≤ 360° [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Principal solution x = 30°\nM1: Second solution x = 150°\nA1: x = 30° or 150°"
            },
            {
                question: "A triangle has sides a = 7, b = 8 and angle C = 60°. Find side c using the cosine rule [3 marks]",
                totalMarks: 3,
                markScheme: "M1: c² = a² + b² - 2ab cos C\nM1: c² = 49 + 64 - 56 = 57\nA1: c = √57"
            },
            {
                question: "Find the area of triangle ABC where a = 5cm, b = 8cm and C = 30° [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Area = ½ab sin C\nA1: 10 cm²"
            },
            {
                question: "Show that sin²θ + cos²θ = 1 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Consider right triangle with hypotenuse 1\nM1: By Pythagoras theorem\nA1: sin²θ + cos²θ = 1"
            },
            {
                question: "Solve 2cos(x) = 1 for 0° ≤ x ≤ 360° [3 marks]",
                totalMarks: 3,
                markScheme: "M1: cos(x) = 0.5\nM1: x = 60° or x = 300°\nA1: Both solutions correct"
            },
            {
                question: "Express 3sin(θ) + 4cos(θ) in the form Rsin(θ + α) [4 marks]",
                totalMarks: 4,
                markScheme: "M1: R = √(3² + 4²) = 5\nM1: tan α = 4/3\nM1: α = 53.1°\nA1: 5sin(θ + 53.1°)"
            },
            {
                question: "Find the exact value of sin(45°)cos(30°) + cos(45°)sin(30°) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use exact values\nM1: (√2/2)(√3/2) + (√2/2)(1/2)\nA1: (√6 + √2)/4"
            },
            {
                question: "Solve tan²(x) = 3 for 0° ≤ x ≤ 360° [4 marks]",
                totalMarks: 4,
                markScheme: "M1: tan(x) = ±√3\nM1: Solutions for tan(x) = √3: 60°, 240°\nM1: Solutions for tan(x) = -√3: 120°, 300°\nA1: x = 60°, 120°, 240°, 300°"
            },
            {
                question: "A circle has radius 10cm. Find the arc length subtended by an angle of π/3 radians [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Arc length = rθ\nA1: 10π/3 cm"
            },
            {
                question: "Find the area of a sector of a circle with radius 6cm and angle π/4 radians [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Area = ½r²θ\nA1: 9π/2 cm²"
            },
            {
                question: "Prove that tan(θ) = sin(θ)/cos(θ) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: In right triangle, tan = opp/adj\nA1: sin/cos = (opp/hyp)/(adj/hyp) = opp/adj = tan"
            }
        ],
        'Pure Maths: Exponentials and Logarithms': [
            {
                question: "Solve 2ˣ = 16 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Rewrite 16 as 2⁴\nA1: x = 4"
            },
            {
                question: "Solve ln(x) = 3 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Take exponential\nA1: x = e³"
            },
            {
                question: "Simplify log₂(8) + log₂(4) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: log₂(8) = 3, log₂(4) = 2\nM1: Or use log₂(8×4) = log₂(32)\nA1: 5"
            },
            {
                question: "Solve 3ˣ⁺¹ = 27 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: 3ˣ⁺¹ = 3³\nA1: x = 2"
            },
            {
                question: "Express log₅(25) - log₅(5) as a single number [2 marks]",
                totalMarks: 2,
                markScheme: "M1: 2 - 1\nA1: 1"
            },
            {
                question: "Solve eˣ = 10, giving your answer to 3 significant figures [2 marks]",
                totalMarks: 2,
                markScheme: "M1: x = ln(10)\nA1: x = 2.30"
            },
            {
                question: "Express 2log(x) - log(y) as a single logarithm [2 marks]",
                totalMarks: 2,
                markScheme: "M1: log(x²) - log(y)\nA1: log(x²/y)"
            },
            {
                question: "Solve log₃(x) + log₃(x-2) = 1 [4 marks]",
                totalMarks: 4,
                markScheme: "M1: log₃[x(x-2)] = 1\nM1: x(x-2) = 3\nM1: x² - 2x - 3 = 0\nA1: x = 3 (reject x = -1)"
            },
            {
                question: "Given that 5ˣ = 20, find the value of x to 2 decimal places [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Take logs: x log(5) = log(20)\nM1: x = log(20)/log(5)\nA1: x = 1.86"
            },
            {
                question: "Simplify e^(2ln3) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: e^(ln3²) = e^(ln9)\nA1: 9"
            },
            {
                question: "Solve 2^(2x+1) = 32 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: 2^(2x+1) = 2⁵\nM1: 2x + 1 = 5\nA1: x = 2"
            },
            {
                question: "Express ln(8) in terms of ln(2) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: ln(8) = ln(2³)\nA1: 3ln(2)"
            }
        ],
        'Pure Maths: Differentiation': [
            {
                question: "Find dy/dx when y = x³ + 4x² - 2x + 5 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: 3x²\nM1: + 8x\nA1: dy/dx = 3x² + 8x - 2"
            },
            {
                question: "Differentiate y = (2x + 1)³ [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use chain rule: 3(2x + 1)² × 2\nA1: 6(2x + 1)²"
            },
            {
                question: "Find the gradient of y = x² + 3x at x = 2 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: dy/dx = 2x + 3\nA1: At x = 2, gradient = 7"
            },
            {
                question: "Find dy/dx when y = x²sin(x) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use product rule\nM1: dy/dx = 2x sin(x) + x² cos(x)\nA1: Correct answer"
            },
            {
                question: "The curve y = x³ - 6x² + 9x + 1 has stationary points. Find their x-coordinates [4 marks]",
                totalMarks: 4,
                markScheme: "M1: dy/dx = 3x² - 12x + 9\nM1: Set = 0: 3x² - 12x + 9 = 0\nM1: x² - 4x + 3 = 0\nA1: x = 1 or x = 3"
            },
            {
                question: "Differentiate y = √x + 1/x [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Rewrite as x^(1/2) + x^(-1)\nM1: dy/dx = (1/2)x^(-1/2) - x^(-2)\nA1: 1/(2√x) - 1/x²"
            },
            {
                question: "Find d/dx[(3x² + 1)(x - 2)] [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use product rule\nM1: (6x)(x-2) + (3x²+1)(1)\nA1: 9x² - 12x + 1"
            },
            {
                question: "Find dy/dx when y = (x+1)/(x-1) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use quotient rule\nM1: [(x-1)(1) - (x+1)(1)]/(x-1)²\nA1: -2/(x-1)²"
            },
            {
                question: "The curve y = 2x³ - 3x² - 12x + 7 has a stationary point at x = 2. Determine its nature [4 marks]",
                totalMarks: 4,
                markScheme: "M1: dy/dx = 6x² - 6x - 12\nM1: d²y/dx² = 12x - 6\nM1: At x = 2, d²y/dx² = 18 > 0\nA1: Minimum"
            },
            {
                question: "Find the equation of the tangent to y = x² at the point (2, 4) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: dy/dx = 2x, so gradient at x=2 is 4\nM1: Use y - 4 = 4(x - 2)\nA1: y = 4x - 4"
            },
            {
                question: "Differentiate y = e^(3x) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use chain rule\nA1: dy/dx = 3e^(3x)"
            },
            {
                question: "Find dy/dx when y = ln(2x + 1) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use chain rule\nA1: dy/dx = 2/(2x+1)"
            }
        ],
        'Pure Maths: Integration': [
            {
                question: "Find ∫(3x² + 2x) dx [2 marks]",
                totalMarks: 2,
                markScheme: "M1: x³ + x²\nA1: x³ + x² + c"
            },
            {
                question: "Evaluate ∫₀² 4x dx [3 marks]",
                totalMarks: 3,
                markScheme: "M1: [2x²]₀²\nM1: 2(4) - 2(0)\nA1: 8"
            },
            {
                question: "Find the area under y = x² between x = 1 and x = 3 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: ∫₁³ x² dx = [x³/3]₁³\nM1: 27/3 - 1/3\nA1: 26/3"
            },
            {
                question: "Find ∫(6x² - 4x + 1) dx [2 marks]",
                totalMarks: 2,
                markScheme: "M1: 2x³ - 2x² + x\nA1: + c"
            },
            {
                question: "Integrate sin(x) with respect to x [1 mark]",
                totalMarks: 1,
                markScheme: "A1: -cos(x) + c"
            },
            {
                question: "Evaluate ∫₀^π cos(x) dx [2 marks]",
                totalMarks: 2,
                markScheme: "M1: [sin(x)]₀^π\nA1: 0"
            },
            {
                question: "Find ∫(2/x) dx [2 marks]",
                totalMarks: 2,
                markScheme: "M1: 2∫(1/x) dx\nA1: 2ln|x| + c"
            },
            {
                question: "Find ∫e^(2x) dx [2 marks]",
                totalMarks: 2,
                markScheme: "M1: (1/2)e^(2x)\nA1: + c"
            },
            {
                question: "The gradient of a curve is given by dy/dx = 6x + 2. The curve passes through (1, 5). Find the equation of the curve [4 marks]",
                totalMarks: 4,
                markScheme: "M1: Integrate: y = 3x² + 2x + c\nM1: Substitute (1, 5)\nM1: 5 = 3 + 2 + c\nA1: y = 3x² + 2x"
            },
            {
                question: "Find ∫₁⁴ √x dx [3 marks]",
                totalMarks: 3,
                markScheme: "M1: ∫x^(1/2) dx = (2/3)x^(3/2)\nM1: [(2/3)x^(3/2)]₁⁴\nA1: 14/3"
            },
            {
                question: "Calculate the area between y = x² and the x-axis from x = 0 to x = 2 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: ∫₀² x² dx\nM1: [x³/3]₀²\nA1: 8/3"
            },
            {
                question: "Find ∫(3x + 1)² dx [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Expand to 9x² + 6x + 1\nM1: Integrate: 3x³ + 3x² + x\nA1: + c"
            }
        ],
        'Pure Maths: Vectors': [
            {
                question: "Given a = 3i + 4j, find |a| [2 marks]",
                totalMarks: 2,
                markScheme: "M1: |a| = √(3² + 4²)\nA1: 5"
            },
            {
                question: "Given a = 2i - j + 3k and b = i + 2j - k, find a + b [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Add components\nA1: 3i + j + 2k"
            },
            {
                question: "Find the scalar product of a = (2, 1, 3) and b = (1, -1, 2) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: a·b = 2(1) + 1(-1) + 3(2)\nA1: 7"
            },
            {
                question: "A line passes through (1, 2, 3) in direction 2i + j - k. Write the vector equation [2 marks]",
                totalMarks: 2,
                markScheme: "M1: r = a + λd\nA1: r = (1,2,3) + λ(2,1,-1)"
            },
            {
                question: "Find a unit vector in the direction of 3i + 4j [3 marks]",
                totalMarks: 3,
                markScheme: "M1: |3i + 4j| = 5\nM1: Divide by magnitude\nA1: (3/5)i + (4/5)j"
            },
            {
                question: "Given vectors a = (2,3) and b = (1,-2), find 2a - 3b [2 marks]",
                totalMarks: 2,
                markScheme: "M1: 2a = (4,6), 3b = (3,-6)\nA1: (1,12)"
            },
            {
                question: "Find the angle between vectors a = (1,0) and b = (1,1) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: cos θ = (a·b)/(|a||b|)\nM1: cos θ = 1/√2\nA1: θ = 45°"
            },
            {
                question: "Points A, B, C have position vectors a = i + 2j, b = 3i + j, c = 2i + 4j. Show that A, B, C form a triangle [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Find AB = 2i - j\nM1: Find AC = i + 2j\nA1: AB ≠ λAC so not collinear, forms triangle"
            },
            {
                question: "The position vectors of points P and Q are 2i + 3j and 5i + 7j. Find |PQ| [3 marks]",
                totalMarks: 3,
                markScheme: "M1: PQ = 3i + 4j\nM1: |PQ| = √(9 + 16)\nA1: 5"
            },
            {
                question: "Given that a = (3, -1, 2) and b = (1, 2, -1), find a·b and state what this tells you about the vectors [3 marks]",
                totalMarks: 3,
                markScheme: "M1: a·b = 3 - 2 - 2\nM1: a·b = -1\nA1: Not perpendicular (would need a·b = 0)"
            }
        ],
        'Statistics: Probability': [
            {
                question: "A bag contains 5 red and 3 blue balls. Two balls are selected without replacement. Find P(both red) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: P(1st red) = 5/8\nM1: P(2nd red|1st red) = 4/7\nA1: 5/14"
            },
            {
                question: "Events A and B are independent with P(A) = 0.3 and P(B) = 0.4. Find P(A ∩ B) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: P(A ∩ B) = P(A) × P(B)\nA1: 0.12"
            },
            {
                question: "P(A) = 0.6, P(B) = 0.5, P(A ∪ B) = 0.8. Find P(A ∩ B) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)\nM1: 0.8 = 1.1 - P(A ∩ B)\nA1: 0.3"
            },
            {
                question: "A fair dice is rolled. Find P(rolling > 4) [1 mark]",
                totalMarks: 1,
                markScheme: "A1: 2/6 = 1/3"
            },
            {
                question: "In a class, 60% study French and 40% study German. 25% study both. Find the probability a student studies neither [3 marks]",
                totalMarks: 3,
                markScheme: "M1: P(F ∪ G) = 0.6 + 0.4 - 0.25\nM1: P(F ∪ G) = 0.75\nA1: P(neither) = 0.25"
            },
            {
                question: "Events A and B are mutually exclusive with P(A) = 0.3 and P(B) = 0.5. Find P(A ∪ B) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: For mutually exclusive, P(A ∪ B) = P(A) + P(B)\nA1: 0.8"
            },
            {
                question: "A fair coin is tossed 3 times. Find the probability of getting exactly 2 heads [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Possible outcomes: HHT, HTH, THH\nM1: P(each) = 1/8\nA1: P(2 heads) = 3/8"
            },
            {
                question: "P(A) = 0.7, P(B) = 0.4, P(A|B) = 0.6. Find P(A ∩ B) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: P(A|B) = P(A ∩ B)/P(B)\nA1: P(A ∩ B) = 0.24"
            },
            {
                question: "Two events A and B are such that P(A) = 0.5, P(B) = 0.6 and P(A ∩ B) = 0.3. Are A and B independent? [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Check if P(A ∩ B) = P(A) × P(B)\nM1: P(A) × P(B) = 0.3\nA1: Yes, independent"
            },
            {
                question: "A card is drawn from a pack. Find P(King or Heart) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: P(King) = 4/52, P(Heart) = 13/52\nM1: P(King ∩ Heart) = 1/52\nA1: P(King ∪ Heart) = 16/52 = 4/13"
            }
        ],
        'Statistics: Statistical Distributions': [
            {
                question: "X ~ B(10, 0.3). State the mean and variance [2 marks]",
                totalMarks: 2,
                markScheme: "B1: Mean = np = 3\nB1: Variance = np(1-p) = 2.1"
            },
            {
                question: "X ~ N(50, 16). Find the standard deviation [1 mark]",
                totalMarks: 1,
                markScheme: "A1: σ = 4"
            },
            {
                question: "For binomial B(20, p), the mean is 8. Find p [2 marks]",
                totalMarks: 2,
                markScheme: "M1: np = 20p = 8\nA1: p = 0.4"
            },
            {
                question: "X ~ B(15, 0.2). Find P(X = 3) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use P(X=r) = ⁿCᵣpʳ(1-p)ⁿ⁻ʳ\nA1: ¹⁵C₃(0.2)³(0.8)¹² ≈ 0.250"
            },
            {
                question: "X ~ N(100, 25). Find P(X > 110) using Z tables [4 marks]",
                totalMarks: 4,
                markScheme: "M1: Z = (110-100)/5 = 2\nM1: P(Z > 2) = 1 - P(Z < 2)\nM1: From tables P(Z < 2) = 0.9772\nA1: 0.0228"
            },
            {
                question: "A normal distribution has mean 60 and standard deviation 8. Find the value of k such that P(X < k) = 0.9 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: From tables, Z = 1.28 when P(Z<z) = 0.9\nM1: k = μ + zσ\nA1: k = 60 + 1.28(8) = 70.24"
            },
            {
                question: "State two conditions needed for a binomial distribution [2 marks]",
                totalMarks: 2,
                markScheme: "B1: Fixed number of trials\nB1: Constant probability of success / independent trials"
            },
            {
                question: "X ~ B(12, 0.25). Find P(X ≤ 2) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: P(X ≤ 2) = P(X=0) + P(X=1) + P(X=2)\nM1: Calculate each term\nA1: 0.390"
            },
            {
                question: "The heights of students are normally distributed with mean 170cm and standard deviation 10cm. Find P(height > 180cm) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Z = (180-170)/10 = 1\nM1: P(Z > 1) = 1 - 0.8413\nA1: 0.1587"
            },
            {
                question: "X ~ N(μ, σ²). Given P(X < 100) = 0.8 and P(X < 80) = 0.2, find μ [4 marks]",
                totalMarks: 4,
                markScheme: "M1: Z values: 0.84 and -0.84\nM1: 100 = μ + 0.84σ and 80 = μ - 0.84σ\nM1: Add equations: 180 = 2μ\nA1: μ = 90"
            }
        ],
        'Mechanics: Kinematics': [
            {
                question: "A particle moves with constant acceleration 2 m/s². Initial velocity is 3 m/s. Find velocity after 5 seconds [2 marks]",
                totalMarks: 2,
                markScheme: "M1: v = u + at\nA1: v = 13 m/s"
            },
            {
                question: "A car accelerates from rest at 3 m/s² for 4 seconds. Find distance travelled [3 marks]",
                totalMarks: 3,
                markScheme: "M1: s = ut + ½at²\nM1: s = 0 + ½(3)(16)\nA1: s = 24 m"
            },
            {
                question: "A ball is thrown upwards at 20 m/s. Taking g = 10 m/s², find maximum height [3 marks]",
                totalMarks: 3,
                markScheme: "M1: v² = u² + 2as, v = 0 at max height\nM1: 0 = 400 - 20s\nA1: s = 20 m"
            },
            {
                question: "A particle has displacement s = 2t² + 3t. Find velocity when t = 2 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: v = ds/dt = 4t + 3\nA1: v = 11 m/s"
            },
            {
                question: "A train decelerates uniformly from 30 m/s to rest in 60m. Find the deceleration [3 marks]",
                totalMarks: 3,
                markScheme: "M1: v² = u² + 2as\nM1: 0 = 900 + 2a(60)\nA1: a = -7.5 m/s²"
            },
            {
                question: "A particle moves in a straight line such that its velocity at time t is v = 3t² - 2t. Find its acceleration when t = 2 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: a = dv/dt = 6t - 2\nA1: a = 10 m/s²"
            },
            {
                question: "A car travels at 20 m/s for 10s, then accelerates at 2 m/s² for 5s. Find total distance [4 marks]",
                totalMarks: 4,
                markScheme: "M1: First part: s₁ = 20 × 10 = 200m\nM1: Second part: s₂ = 20(5) + ½(2)(25)\nM1: s₂ = 100 + 25 = 125m\nA1: Total = 325m"
            },
            {
                question: "A stone is dropped from rest. How far does it fall in 3 seconds? (g = 10 m/s²) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: s = ½gt²\nA1: s = 45 m"
            },
            {
                question: "A particle has velocity v = 4t - 3. Find the displacement from t = 1 to t = 4 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: s = ∫v dt = 2t² - 3t\nM1: [2t² - 3t]₁⁴ = (32 - 12) - (2 - 3)\nA1: s = 21 m"
            },
            {
                question: "A particle moves with velocity v = 6 - 2t. Find when it comes to rest [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Set v = 0: 6 - 2t = 0\nA1: t = 3 s"
            }
        ],
        'Mechanics: Forces and Newton\'s Laws': [
            {
                question: "A 5kg mass is pulled horizontally by a force of 20N. Find acceleration [2 marks]",
                totalMarks: 2,
                markScheme: "M1: F = ma\nA1: a = 4 m/s²"
            },
            {
                question: "State Newton's Second Law [1 mark]",
                totalMarks: 1,
                markScheme: "A1: F = ma or force is proportional to rate of change of momentum"
            },
            {
                question: "A 10kg box on a surface has μ = 0.3. Taking g = 10 m/s², find friction force [2 marks]",
                totalMarks: 2,
                markScheme: "M1: R = mg = 100N\nA1: F = μR = 30N"
            },
            {
                question: "A 2kg mass on a smooth plane inclined at 30° to the horizontal experiences a force down the plane. Find this force (g = 10 m/s²) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: F = mg sin(30°)\nA1: F = 10N"
            },
            {
                question: "Two masses 3kg and 2kg are connected by a string over a smooth pulley. Find acceleration (g = 10 m/s²) [4 marks]",
                totalMarks: 4,
                markScheme: "M1: For 3kg: 30 - T = 3a\nM1: For 2kg: T - 20 = 2a\nM1: Add equations: 10 = 5a\nA1: a = 2 m/s²"
            },
            {
                question: "A car of mass 800kg accelerates from 10 m/s to 20 m/s. Find the resultant force if this takes 5s [3 marks]",
                totalMarks: 3,
                markScheme: "M1: a = (20-10)/5 = 2 m/s²\nM1: F = ma\nA1: F = 1600N"
            },
            {
                question: "A particle of mass m on a rough horizontal surface is pulled by force P at angle θ to horizontal. The normal reaction is R. Write down an equation for vertical equilibrium [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Resolve vertically\nA1: R + P sin θ = mg"
            },
            {
                question: "State Newton's Third Law [1 mark]",
                totalMarks: 1,
                markScheme: "A1: For every action there is an equal and opposite reaction"
            },
            {
                question: "A lift of mass 500kg accelerates upwards at 2 m/s². Find the tension in the cable (g = 10 m/s²) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: T - mg = ma\nM1: T - 5000 = 1000\nA1: T = 6000N"
            },
            {
                question: "A block of mass 5kg rests on a rough plane inclined at 20° to horizontal. Coefficient of friction is 0.4. Find the frictional force (g = 10 m/s²) [4 marks]",
                totalMarks: 4,
                markScheme: "M1: R = mg cos 20° = 47N\nM1: Max friction = 0.4 × 47 = 18.8N\nM1: Component down slope = mg sin 20° = 17.1N\nA1: F = 17.1N (less than max, so no sliding)"
            }
        ]
    },
    'edexcel-further-maths': {
        'Further Pure: Complex Numbers': [
            {
                question: "Express (2 + 3i)(1 - 2i) in the form a + bi [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Expand: 2 - 4i + 3i - 6i²\nM1: Use i² = -1\nA1: 8 - i"
            },
            {
                question: "Find |3 + 4i| [2 marks]",
                totalMarks: 2,
                markScheme: "M1: √(3² + 4²)\nA1: 5"
            },
            {
                question: "Find arg(1 + i) in radians [2 marks]",
                totalMarks: 2,
                markScheme: "M1: arctan(1/1)\nA1: π/4"
            },
            {
                question: "Express 2 + 2i in the form re^(iθ) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: r = 2√2\nM1: θ = π/4\nA1: 2√2 e^(iπ/4)"
            },
            {
                question: "Solve z² = -1 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: z² = i²\nA1: z = ±i"
            },
            {
                question: "Find the complex conjugate of 3 - 5i [1 mark]",
                totalMarks: 1,
                markScheme: "A1: 3 + 5i"
            },
            {
                question: "Express (1+i)/(1-i) in the form a + bi [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Multiply by conjugate (1+i)/(1+i)\nM1: (1+2i+i²)/(1-i²)\nA1: i"
            },
            {
                question: "Find all solutions to z³ = 1 [4 marks]",
                totalMarks: 4,
                markScheme: "M1: 1 = e^(i0)\nM1: z = e^(i×0/3), e^(i×2π/3), e^(i×4π/3)\nM1: Convert to a+bi form\nA1: 1, -1/2 + i√3/2, -1/2 - i√3/2"
            },
            {
                question: "Given z = 3 - 4i, find z* and zz* [3 marks]",
                totalMarks: 3,
                markScheme: "M1: z* = 3 + 4i\nM1: zz* = (3-4i)(3+4i)\nA1: zz* = 25"
            },
            {
                question: "Prove de Moivre's theorem for n = 2 [4 marks]",
                totalMarks: 4,
                markScheme: "M1: (cos θ + i sin θ)²\nM1: = cos²θ - sin²θ + 2i cos θ sin θ\nM1: = cos 2θ + i sin 2θ\nA1: Correct conclusion"
            }
        ],
        'Further Pure: Matrices': [
            {
                question: "Find det([[3,2],[1,4]]) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: ad - bc\nA1: 10"
            },
            {
                question: "Find the inverse of [[2,1],[5,3]] [3 marks]",
                totalMarks: 3,
                markScheme: "M1: det = 1\nM1: Swap diagonal, negate off-diagonal\nA1: [[3,-1],[-5,2]]"
            },
            {
                question: "Calculate [[1,2],[3,4]] × [[2],[1]] [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Row×column multiplication\nA1: [[4],[10]]"
            },
            {
                question: "Find 2A where A = [[1,3],[0,-2]] [1 mark]",
                totalMarks: 1,
                markScheme: "A1: [[2,6],[0,-4]]"
            },
            {
                question: "Given A = [[2,1],[4,3]] and B = [[1,0],[0,2]], find AB [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Multiply matrices correctly\nM1: First row: [2,2]\nA1: AB = [[2,2],[4,6]]"
            },
            {
                question: "Find the eigenvalues of [[3,1],[1,3]] [4 marks]",
                totalMarks: 4,
                markScheme: "M1: det(A - λI) = 0\nM1: (3-λ)² - 1 = 0\nM1: λ² - 6λ + 8 = 0\nA1: λ = 2 or λ = 4"
            },
            {
                question: "Show that [[1,0],[0,1]] is the identity matrix [2 marks]",
                totalMarks: 2,
                markScheme: "M1: For any matrix A, IA = A\nA1: Demonstration shown"
            },
            {
                question: "Find the transpose of [[2,3],[1,4],[0,5]] [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Swap rows and columns\nA1: [[2,1,0],[3,4,5]]"
            },
            {
                question: "Solve [[2,1],[4,3]][[x],[y]] = [[5],[11]] [4 marks]",
                totalMarks: 4,
                markScheme: "M1: Find inverse of coefficient matrix\nM1: Multiply by inverse\nM1: Calculate result\nA1: x = 2, y = 1"
            },
            {
                question: "Show that [[1,2],[2,4]] is singular [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Calculate determinant\nA1: det = 0, therefore singular"
            }
        ],
        'Further Pure: Differential Equations': [
            {
                question: "Solve dy/dx = 2y given y = 3 when x = 0 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Separate variables: dy/y = 2dx\nM1: ln|y| = 2x + c\nA1: y = 3e^(2x)"
            },
            {
                question: "Find the general solution to d²y/dx² - 4y = 0 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Auxiliary equation m² - 4 = 0\nM1: m = ±2\nA1: y = Ae^(2x) + Be^(-2x)"
            },
            {
                question: "Solve dy/dx = x/y with y(0) = 1 [4 marks]",
                totalMarks: 4,
                markScheme: "M1: y dy = x dx\nM1: y²/2 = x²/2 + c\nM1: Use initial condition: c = 1/2\nA1: y² = x² + 1"
            },
            {
                question: "Solve dy/dx + 2y = 0 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Separate: dy/y = -2dx\nA1: y = Ae^(-2x)"
            },
            {
                question: "Find the general solution to d²y/dx² + 9y = 0 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: m² + 9 = 0\nM1: m = ±3i\nA1: y = A cos(3x) + B sin(3x)"
            },
            {
                question: "Solve dy/dx = y², y(0) = 1 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: dy/y² = dx, so -1/y = x + c\nM1: Use y(0) = 1: c = -1\nA1: y = 1/(1-x)"
            },
            {
                question: "Find particular solution to d²y/dx² - 3dy/dx + 2y = 0, y(0) = 1, y'(0) = 0 [5 marks]",
                totalMarks: 5,
                markScheme: "M1: m² - 3m + 2 = 0, so m = 1 or 2\nM1: y = Ae^x + Be^(2x)\nM1: Use y(0) = 1: A + B = 1\nM1: y' = Ae^x + 2Be^(2x), so A + 2B = 0\nA1: A = 2, B = -1, y = 2e^x - e^(2x)"
            },
            {
                question: "Solve dx/dt = 3x, x(0) = 5 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: x = Ce^(3t)\nA1: x = 5e^(3t)"
            },
            {
                question: "Find general solution to d²y/dx² + 2dy/dx + y = 0 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: m² + 2m + 1 = 0\nM1: (m+1)² = 0, repeated root m = -1\nA1: y = (A + Bx)e^(-x)"
            },
            {
                question: "Solve dy/dx = e^x with y(0) = 2 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: y = e^x + c\nA1: y = e^x + 1"
            }
        ],
        'Further Stats 1: Discrete Random Variables': [
            {
                question: "X has P(X=1)=0.3, P(X=2)=0.5, P(X=3)=0.2. Find E(X) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: E(X) = Σ xP(X=x)\nM1: = 1(0.3) + 2(0.5) + 3(0.2)\nA1: = 1.9"
            },
            {
                question: "If E(X) = 5 and Var(X) = 4, find E(2X + 3) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: E(2X + 3) = 2E(X) + 3\nA1: = 13"
            },
            {
                question: "If E(X) = 5 and Var(X) = 4, find Var(2X) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Var(2X) = 4Var(X)\nA1: = 16"
            },
            {
                question: "X has probability function P(X=x) = kx for x = 1,2,3. Find k [3 marks]",
                totalMarks: 3,
                markScheme: "M1: ΣP(X=x) = 1\nM1: k + 2k + 3k = 1\nA1: k = 1/6"
            },
            {
                question: "Find E(X²) given E(X) = 3 and Var(X) = 2 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Var(X) = E(X²) - [E(X)]²\nM1: 2 = E(X²) - 9\nA1: E(X²) = 11"
            },
            {
                question: "X and Y are independent with E(X) = 2, E(Y) = 3. Find E(XY) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: For independent variables E(XY) = E(X)E(Y)\nA1: = 6"
            },
            {
                question: "The cumulative distribution function of X is F(x) = x²/9 for 0 ≤ x ≤ 3. Find P(1 < X < 2) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: P(1 < X < 2) = F(2) - F(1)\nM1: = 4/9 - 1/9\nA1: = 1/3"
            },
            {
                question: "Given E(X) = 4, E(Y) = 6, Var(X) = 2, Var(Y) = 3, find Var(X + Y) assuming independence [3 marks]",
                totalMarks: 3,
                markScheme: "M1: For independent variables Var(X+Y) = Var(X) + Var(Y)\nM1: = 2 + 3\nA1: = 5"
            },
            {
                question: "X has E(X) = 10. Find E(3X - 7) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: E(3X - 7) = 3E(X) - 7\nA1: = 23"
            },
            {
                question: "Find Var(X) given that E(X) = 5 and E(X²) = 30 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Var(X) = E(X²) - [E(X)]²\nA1: = 30 - 25 = 5"
            }
        ],
        'Further Stats 1: Poisson Distribution': [
            {
                question: "Emails arrive at mean 3 per hour (Poisson). Find P(X = 2) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: P(X=r) = (λʳ e^(-λ))/r!\nM1: P(X=2) = (9e^(-3))/2\nA1: ≈ 0.224"
            },
            {
                question: "X ~ Po(4). Find E(X) and Var(X) [2 marks]",
                totalMarks: 2,
                markScheme: "B1: E(X) = 4\nB1: Var(X) = 4"
            },
            {
                question: "Accidents occur at rate 2 per week (Poisson). Find P(no accidents in a week) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: P(X=0) = e^(-2)\nA1: ≈ 0.135"
            },
            {
                question: "X ~ Po(5). Find P(X ≤ 2) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: P(X≤2) = P(0) + P(1) + P(2)\nM1: Calculate each term\nA1: ≈ 0.125"
            },
            {
                question: "Calls arrive at rate 4 per 10 minutes. Find the mean number of calls in 5 minutes [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Rate proportional to time\nA1: λ = 2"
            },
            {
                question: "X ~ Po(λ) and P(X=0) = 0.2. Find λ [3 marks]",
                totalMarks: 3,
                markScheme: "M1: e^(-λ) = 0.2\nM1: -λ = ln(0.2)\nA1: λ ≈ 1.61"
            },
            {
                question: "State two conditions for a Poisson distribution [2 marks]",
                totalMarks: 2,
                markScheme: "B1: Events occur independently\nB1: Events occur at constant average rate"
            },
            {
                question: "X ~ Po(3), Y ~ Po(5), X and Y independent. Find the distribution of X + Y [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Sum of independent Poisson is Poisson\nA1: X + Y ~ Po(8)"
            },
            {
                question: "A Poisson distribution has mean 6. Find P(X > 6) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: P(X > 6) = 1 - P(X ≤ 6)\nA1: Use tables or calculate ≈ 0.394"
            },
            {
                question: "Defects occur at 0.5 per metre (Poisson). Find P(exactly 1 defect in 3 metres) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: λ = 0.5 × 3 = 1.5\nM1: P(X=1) = 1.5e^(-1.5)\nA1: ≈ 0.335"
            }
        ],
        'Further Mechanics 1: Work, Energy and Power': [
            {
                question: "A 5kg mass is lifted 10m vertically (g=10). Find work done [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Work = mgh\nA1: = 500 J"
            },
            {
                question: "A car of mass 1000kg accelerates from 10 m/s to 20 m/s. Find gain in KE [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Initial KE = 50000 J\nM1: Final KE = 200000 J\nA1: Gain = 150000 J"
            },
            {
                question: "Find the kinetic energy of a 2kg mass moving at 5 m/s [2 marks]",
                totalMarks: 2,
                markScheme: "M1: KE = ½mv²\nA1: = 25 J"
            },
            {
                question: "A force of 20N moves an object 5m in the direction of the force. Find work done [2 marks]",
                totalMarks: 2,
                markScheme: "M1: W = Fs\nA1: = 100 J"
            },
            {
                question: "A car engine does 3000J of work in 10s. Find the power [2 marks]",
                totalMarks: 2,
                markScheme: "M1: P = W/t\nA1: = 300 W"
            },
            {
                question: "A particle of mass 3kg falls 20m. Taking g = 10 m/s², find its speed on hitting the ground [3 marks]",
                totalMarks: 3,
                markScheme: "M1: PE = mgh = 600 J\nM1: PE = KE, so ½(3)v² = 600\nA1: v = 20 m/s"
            },
            {
                question: "State the principle of conservation of energy [1 mark]",
                totalMarks: 1,
                markScheme: "A1: Energy cannot be created or destroyed, only transferred"
            },
            {
                question: "A machine lifts a 100kg mass through 5m in 20s (g=10). Find the power [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Work = mgh = 5000 J\nM1: Power = W/t\nA1: = 250 W"
            },
            {
                question: "A 1kg mass is projected upwards at 10 m/s. Find maximum height (g=10) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Initial KE = 50 J\nM1: At max height, KE = 0, PE = 50 = 10h\nA1: h = 5 m"
            },
            {
                question: "Find the GPE of a 2kg mass at height 15m (g=10) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: PE = mgh\nA1: = 300 J"
            }
        ]
    },
    'ocr-cs': {
        'Component 1: Data Types': [
            {
                question: "Convert binary 10110101 to hexadecimal [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Split into groups of 4: 1011 0101\nA1: B5"
            },
            {
                question: "Explain difference between ASCII and Unicode [3 marks]",
                totalMarks: 3,
                markScheme: "M1: ASCII uses 7/8 bits\nM1: Unicode uses 16/32 bits\nA1: Unicode can represent more characters"
            },
            {
                question: "Convert denary 156 to binary [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use repeated division or place values\nA1: 10011100"
            },
            {
                question: "What is two's complement used for? [1 mark]",
                totalMarks: 1,
                markScheme: "A1: Representing negative numbers in binary"
            },
            {
                question: "Convert -5 to 8-bit two's complement [2 marks]",
                totalMarks: 2,
                markScheme: "M1: 5 = 00000101, invert = 11111010, add 1\nA1: 11111011"
            },
            {
                question: "Explain overflow in binary arithmetic [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Result too large for available bits\nA1: Cannot be stored correctly"
            },
            {
                question: "Convert hexadecimal 2F to denary [2 marks]",
                totalMarks: 2,
                markScheme: "M1: 2×16 + 15\nA1: 47"
            },
            {
                question: "State one advantage of hexadecimal over binary [1 mark]",
                totalMarks: 1,
                markScheme: "A1: More compact / easier to read / fewer digits"
            },
            {
                question: "How many different values can be represented with 8 bits? [2 marks]",
                totalMarks: 2,
                markScheme: "M1: 2⁸\nA1: 256"
            },
            {
                question: "Explain the purpose of a check digit [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Detects errors in data entry/transmission\nA1: Calculated from other digits"
            }
        ],
        'Component 1: Boolean Algebra': [
            {
                question: "Simplify A·B + A·B̄ [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Factor A: A(B + B̄)\nM1: B + B̄ = 1\nA1: = A"
            },
            {
                question: "Draw truth table for A NAND B [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Correct inputs\nA1: Outputs: 1,1,1,0"
            },
            {
                question: "State De Morgan's Laws [2 marks]",
                totalMarks: 2,
                markScheme: "B1: NOT(A AND B) = (NOT A) OR (NOT B)\nB1: NOT(A OR B) = (NOT A) AND (NOT B)"
            },
            {
                question: "Simplify A + A·B [2 marks]",
                totalMarks: 2,
                markScheme: "M1: A(1 + B)\nA1: = A"
            },
            {
                question: "Which gate outputs 1 only when inputs differ? [1 mark]",
                totalMarks: 1,
                markScheme: "A1: XOR"
            },
            {
                question: "Simplify (A + B)·(A + B̄) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Expand to A + AB + AB̄ + B·B̄\nM1: B·B̄ = 0, AB + AB̄ = A\nA1: = A"
            },
            {
                question: "Complete truth table for A XOR B [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Correct inputs\nA1: Outputs: 0,1,1,0"
            },
            {
                question: "Simplify A·(A + B) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: A·A + A·B = A + A·B\nA1: = A"
            },
            {
                question: "Show that A + ĀB = A + B [3 marks]",
                totalMarks: 3,
                markScheme: "M1: A + ĀB = (A + Ā)(A + B)\nM1: A + Ā = 1\nA1: = A + B"
            },
            {
                question: "State the output of NOT(A OR B) when A=1, B=0 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: A OR B = 1\nA1: NOT 1 = 0"
            }
        ],
        'Component 1: Algorithms': [
            {
                question: "Describe how bubble sort works [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Compare adjacent elements\nM1: Swap if wrong order\nA1: Repeat until no swaps"
            },
            {
                question: "What is time complexity of binary search? [1 mark]",
                totalMarks: 1,
                markScheme: "A1: O(log n)"
            },
            {
                question: "Why is binary search more efficient than linear search? [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Eliminates half data each step\nA1: Linear checks each element"
            },
            {
                question: "What structure is needed for binary search? [1 mark]",
                totalMarks: 1,
                markScheme: "A1: Sorted array/list"
            },
            {
                question: "State worst-case time complexity of merge sort [1 mark]",
                totalMarks: 1,
                markScheme: "A1: O(n log n)"
            },
            {
                question: "Explain Big O notation [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Describes algorithm efficiency\nA1: How runtime grows with input size"
            },
            {
                question: "What is the time complexity of linear search? [1 mark]",
                totalMarks: 1,
                markScheme: "A1: O(n)"
            },
            {
                question: "Describe one advantage of merge sort over bubble sort [2 marks]",
                totalMarks: 2,
                markScheme: "M1: More efficient for large datasets\nA1: O(n log n) vs O(n²)"
            },
            {
                question: "Explain the divide and conquer approach [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Break problem into smaller parts\nA1: Solve parts and combine solutions"
            },
            {
                question: "What is the best case time complexity of bubble sort? [2 marks]",
                totalMarks: 2,
                markScheme: "M1: When already sorted\nA1: O(n)"
            }
        ],
        'Component 2: Databases': [
            {
                question: "Write SQL to select all from Students where age > 16 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: SELECT * FROM Students\nA1: WHERE age > 16"
            },
            {
                question: "Explain what a primary key is [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Unique identifier for each record\nA1: Cannot be null"
            },
            {
                question: "What is a foreign key? [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Links to primary key in another table\nA1: Creates relationships"
            },
            {
                question: "State one requirement for 1NF [1 mark]",
                totalMarks: 1,
                markScheme: "A1: No repeating groups / atomic values"
            },
            {
                question: "Write SQL to insert John, aged 17 into Students [2 marks]",
                totalMarks: 2,
                markScheme: "M1: INSERT INTO Students\nA1: VALUES ('John', 17)"
            },
            {
                question: "Explain second normal form (2NF) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: In 1NF and no partial dependencies\nA1: All attributes depend on whole primary key"
            },
            {
                question: "Write SQL to update age to 18 where name = 'John' [2 marks]",
                totalMarks: 2,
                markScheme: "M1: UPDATE Students SET age = 18\nA1: WHERE name = 'John'"
            },
            {
                question: "What does SQL stand for? [1 mark]",
                totalMarks: 1,
                markScheme: "A1: Structured Query Language"
            },
            {
                question: "Write SQL to delete all students aged under 16 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: DELETE FROM Students\nA1: WHERE age < 16"
            },
            {
                question: "Explain entity-relationship diagrams [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Visual representation of database structure\nA1: Shows entities and relationships"
            }
        ],
        'Component 2: Operating Systems': [
            {
                question: "State two functions of an OS [2 marks]",
                totalMarks: 2,
                markScheme: "B1: Memory management / file management\nB1: Process scheduling / user interface"
            },
            {
                question: "Explain virtual memory [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Uses hard disk as extension of RAM\nA1: Allows larger programs than available RAM"
            },
            {
                question: "Describe purpose of an interrupt [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Signal to stop current task\nA1: Deal with higher priority task"
            },
            {
                question: "What is paging? [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Dividing memory into fixed blocks\nA1: Programs loaded into available pages"
            },
            {
                question: "Explain the role of a scheduler [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Allocates processor time\nA1: To different processes/programs"
            },
            {
                question: "What is a device driver? [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Software that controls hardware device\nA1: Allows OS to communicate with device"
            },
            {
                question: "Describe round-robin scheduling [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Each process given fixed time slice\nA1: Processes take turns in circular order"
            },
            {
                question: "Explain spooling [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Storing output in buffer/queue\nA1: Until device (e.g. printer) is ready"
            },
            {
                question: "State one advantage of multi-tasking [1 mark]",
                totalMarks: 1,
                markScheme: "A1: Better CPU utilization / multiple programs run simultaneously"
            },
            {
                question: "What is the purpose of memory management? [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Allocate memory to processes\nA1: Prevent conflicts / optimize usage"
            }
        ]
    }
};
