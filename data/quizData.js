// data/quizData.js
const quizData = {
  Introduction: [
    {
      id: 1,
      question:
        "What are some benefits associated with Artificial Intelligence?",
      options: [
        "Increased job displacement and unemployment",
        "Slower progress in scientific research",
        "Potential to solve global challenges and accelerate scientific research",
        "Limited impact on societal issues",
      ],
      correctAnswer:
        "Potential to solve global challenges and accelerate scientific research",
    },
    {
      id: 2,
      question:
        "Which three main fields have contributed to the development of Artificial Intelligence (AI)?",
      options: [
        "Physics, Chemistry, Biology",
        "Geography, History, Literature",
        "Philosophy, Mathematics, Computer Science",
        "Sociology, Psychology, Linguistics",
      ],
      correctAnswer: "Philosophy, Mathematics, Computer Science",
    },
    // Add more questions for Lesson 1 as needed
  ],
  "Intelligent-Agents": [
    {
      id: 1,
      question:
        "What is the central concept identified in Chapter 2 for approaching artificial intelligence?",
      options: [
        "Increased job displacement and unemployment",
        "The concept of rational agents",
        "Slower progress in scientific research",
        "Potential to solve global challenges and accelerate scientific research",
      ],
      correctAnswer: "The concept of rational agents",
    },
    {
      id: 2,
      question:
        "According to Chapter 2, what is consequentialism in the context of artificial intelligence?",
      options: [
        "An approach to solving global challenges",
        "Evaluating an agent's behavior based on its consequences",
        "The study of historical consequences of AI",
        "The belief that AI has limited impact on societal issues",
      ],
      correctAnswer: "Evaluating an agent's behavior based on its consequences",
    },
    {
      id: 3,
      question:
        "In Chapter 2.3, what framework is introduced for specifying task environments?",
      options: [
        "PEANUTS (Performance, Environment, Actuators, and Sensors)",
        "PEAS (Performance, Environment, Actuators, Sensors)",
        "PEACH (Performance, Environment, Actions, and Choices)",
        "PEAR (Performance, Environment, Actuators, and Responses)",
      ],
      correctAnswer: "PEAS (Performance, Environment, Actuators, Sensors)",
    },
  ],
  "Problem-Solving": [
    {
      id: 1,
      question: "What type of representation do problem-solving agents use?",
      options: [
        "Atomic representations with no internal structure",
        "Complex representations with detailed internal structure",
        "Non-deterministic representations",
        "Static representations that do not change over time",
      ],
      correctAnswer: "Atomic representations with no internal structure",
    },
    {
      id: 2,
      question:
        "What distinguishes informed search strategies from uninformed ones?",
      options: [
        "The ability to use a heuristic to estimate proximity to the goal",
        "The use of complex algorithms regardless of the goal’s proximity",
        "The absence of any specific goal state in the search process",
        "The exclusive use of atomic representations",
      ],
      correctAnswer:
        "The ability to use a heuristic to estimate proximity to the goal",
    },
    {
      id: 3,
      question: "What is the primary focus of the 'Grid World' example?",
      options: [
        "Demonstrating a multi-agent environment",
        "Illustrating a 2D array of cells where agents move and interact",
        "Exploring the applications of quantum computing in AI",
        "Solving complex mathematical problems",
      ],
      correctAnswer:
        "Illustrating a 2D array of cells where agents move and interact",
    },
    {
      id: 4,
      question: "What is the objective of the Sokoban Puzzle?",
      options: [
        "To clean every cell in the least amount of moves",
        "To find the shortest path in a maze",
        "To push boxes to designated storage locations",
        "To match tiles in a specific configuration",
      ],
      correctAnswer: "To push boxes to designated storage locations",
    },
    {
      id: 5,
      question:
        "Which of the following is an example of a real-world problem that problem-solving strategies can address?",
      options: [
        "The Vacuum World",
        "The Sokoban Puzzle",
        "Route-Finding",
        "The Sliding-Tile Puzzle",
      ],
      correctAnswer: "Route-Finding",
    },
    {
      id: 6,
      question:
        "What does the function BEST-FIRST-SEARCH return if a solution is not found?",
      options: [
        "An arbitrary node",
        "The initial node",
        "A solution node",
        "Failure",
      ],
      correctAnswer: "Failure",
    },
    {
      id: 7,
      question:
        "What kind of data structure is primarily used to store the frontier in search algorithms?",
      options: ["Queue", "Stack", "Array", "Hash table"],
      correctAnswer: "Queue",
    },
    {
      id: 8,
      question: "What is a key characteristic of A* search algorithm?",
      options: [
        "It uses the evaluation function f(n) = g(n) + h(n)",
        "It only expands the deepest node in the frontier",
        "It treats all actions as having the same cost",
        "It does not require a heuristic function",
      ],
      correctAnswer: "It uses the evaluation function f(n) = g(n) + h(n)",
    },
    {
      id: 9,
      question:
        "What is the Manhattan distance used for in the context of the 15-puzzle?",
      options: [
        "To calculate the total number of misplaced tiles",
        "To measure the straight-line distance to Bucharest",
        "To sum the distances of the tiles from their goal positions",
        "To determine the depth of the search tree",
      ],
      correctAnswer:
        "To sum the distances of the tiles from their goal positions",
    },
    {
      id: 10,
      question: "How can heuristic functions be generated?",
      options: [
        "By relaxing the problem to simplify the original problem",
        "By increasing the complexity of the original problem",
        "Through random selection",
        "Using only the Manhattan distance",
      ],
      correctAnswer: "By relaxing the problem to simplify the original problem",
    },
  ],
  "Search-in-Complex-Environments": [
    {
      id: 1,
      question: "What is a key feature of local search algorithms?",
      options: [
        "They keep track of all paths explored.",
        "They use a significant amount of memory.",
        "They operate without keeping track of paths or states reached.",
        "They guarantee finding the global optimum.",
      ],
      correctAnswer:
        "They operate without keeping track of paths or states reached.",
    },
    {
      id: 2,
      question:
        "What is the primary limitation of hill climbing search algorithms?",
      options: [
        "They require large amounts of memory.",
        "They can get stuck in local maxima or minima.",
        "They are unable to solve problems with multiple goals.",
        "They cannot operate in continuous spaces.",
      ],
      correctAnswer: "They can get stuck in local maxima or minima.",
    },
    {
      id: 3,
      question:
        "How does local beam search differ from standard hill climbing?",
      options: [
        "It operates with a single state at a time.",
        "It guarantees finding the global optimum.",
        "It uses multiple states at once to avoid local optima.",
        "It cannot be used in optimization problems.",
      ],
      correctAnswer: "It uses multiple states at once to avoid local optima.",
    },
    {
      id: 4,
      question: "What is the purpose of evolutionary algorithms?",
      options: [
        "To perform deterministic searches in known environments.",
        "To mimic biological evolution to solve optimization problems.",
        "To discretize continuous spaces for easier computation.",
        "To apply calculus to find global maxima in search landscapes.",
      ],
      correctAnswer:
        "To mimic biological evolution to solve optimization problems.",
    },
    {
      id: 5,
      question:
        "In the context of search problems, what is meant by 'discretization'?",
      options: [
        "Converting a deterministic problem into a nondeterministic one.",
        "Breaking down a problem into smaller, independent subproblems.",
        "Limiting continuous state spaces to fixed points on a grid.",
        "Simplifying complex search algorithms for easier implementation.",
      ],
      correctAnswer:
        "Limiting continuous state spaces to fixed points on a grid.",
    },
    {
      id: 6,
      question:
        "What is the gradient used for in local search in continuous spaces?",
      options: [
        "To measure the total cost from the initial state to the goal state.",
        "To give the direction and magnitude of the steepest slope in the landscape.",
        "To calculate the exact solution of the search problem without iteration.",
        "To discretize the continuous search space for the application of hill climbing.",
      ],
      correctAnswer:
        "To give the direction and magnitude of the steepest slope in the landscape.",
    },
    {
      id: 7,
      question:
        "How do nondeterministic environments affect search strategies?",
      options: [
        "They allow for simpler and more direct search paths.",
        "They necessitate the use of conditional or contingent plans.",
        "They ensure that search algorithms are more memory-efficient.",
        "They prevent the use of heuristic search algorithms.",
      ],
      correctAnswer:
        "They necessitate the use of conditional or contingent plans.",
    },
    {
      id: 8,
      question: "What is an AND–OR search tree used for?",
      options: [
        "Solving deterministic problems in fully observable environments.",
        "Finding contingent solutions to nondeterministic problems.",
        "Optimizing search paths in local search algorithms.",
        "Discretizing continuous search spaces.",
      ],
      correctAnswer:
        "Finding contingent solutions to nondeterministic problems.",
    },
    {
      id: 9,
      question: "What characterizes a sensorless problem?",
      options: [
        "The agent has full observability of the environment.",
        "The agent's percepts provide no information about its state.",
        "The environment is deterministic and the agent knows all outcomes.",
        "Only local search algorithms can be used to find a solution.",
      ],
      correctAnswer:
        "The agent's percepts provide no information about its state.",
    },
    {
      id: 10,
      question: "How does an online search agent operate in its environment?",
      options: [
        "By precomputing a complete solution before taking any action.",
        "By interleaving computation, sensing, and acting.",
        "By relying solely on a predetermined map of the environment.",
        "By using deep learning to predict all possible outcomes.",
      ],
      correctAnswer: "By interleaving computation, sensing, and acting.",
    },
  ],
  "Constraint-Satisfaction-Problems": [
    {
      id: 1,
      question: "What is a constraint satisfaction problem (CSP)?",
      options: [
        "A problem solved when each variable has a value that satisfies all constraints",
        "A search problem that requires finding the shortest path in a state space",
        "A problem where variables have continuous domains only",
        "A problem that can only be solved with deterministic algorithms",
      ],
      correctAnswer:
        "A problem solved when each variable has a value that satisfies all constraints",
    },
    {
      id: 2,
      question: "What are the three components of a CSP?",
      options: [
        "Algorithms, Variables, Constraints",
        "Variables, Domains, Constraints",
        "Variables, Constraints, Solutions",
        "Domains, Solutions, Heuristics",
      ],
      correctAnswer: "Variables, Domains, Constraints",
    },
    {
      id: 3,
      question: "What does 'arc consistency' in a CSP ensure?",
      options: [
        "Every value in a variable's domain can satisfy the variable's unary constraints",
        "Every value in a variable's domain satisfies the variable’s binary constraints",
        "The variables in the CSP form a consistent cycle",
        "All variables are assigned values from their domains randomly",
      ],
      correctAnswer:
        "Every value in a variable's domain satisfies the variable’s binary constraints",
    },
    {
      id: 4,
      question: "What is the AC-3 algorithm used for in CSPs?",
      options: [
        "Generating random assignments for variables",
        "Enforcing arc consistency across all variables",
        "Reducing the problem to a simpler form",
        "Selecting the best heuristic for search",
      ],
      correctAnswer: "Enforcing arc consistency across all variables",
    },
    {
      id: 5,
      question:
        "Which heuristic chooses the variable with the fewest legal values in CSPs?",
      options: [
        "Degree Heuristic",
        "Least-Constraining-Value",
        "Minimum-Remaining-Values (MRV) Heuristic",
        "Most-Constraining-Variable",
      ],
      correctAnswer: "Minimum-Remaining-Values (MRV) Heuristic",
    },
    {
      id: 6,
      question: "What is 'backtracking search' in the context of CSPs?",
      options: [
        "A technique that only uses forward checking",
        "A depth-first search that works on partial assignments",
        "A search method that avoids revisiting states",
        "An algorithm that solves CSPs without using constraints",
      ],
      correctAnswer: "A depth-first search that works on partial assignments",
    },
    {
      id: 7,
      question: "What does the 'min-conflicts' heuristic aim to minimize?",
      options: [
        "The number of variables in the CSP",
        "The number of constraints in the CSP",
        "The number of conflicts with other variables for a chosen value",
        "The number of steps required to solve the CSP",
      ],
      correctAnswer:
        "The number of conflicts with other variables for a chosen value",
    },
    {
      id: 8,
      question: "In CSPs, what is 'forward checking'?",
      options: [
        "A method that checks all assignments before making a move",
        "A technique to establish arc consistency for unassigned variables",
        "A strategy that predicts future conflicts",
        "A way of selecting the next variable to assign",
      ],
      correctAnswer:
        "A technique to establish arc consistency for unassigned variables",
    },
    {
      id: 9,
      question:
        "How do 'global constraints' differ from unary and binary constraints in CSPs?",
      options: [
        "They involve only two variables",
        "They involve an arbitrary number of variables",
        "They apply only to variables with continuous domains",
        "They are easier to solve than unary and binary constraints",
      ],
      correctAnswer: "They involve an arbitrary number of variables",
    },
    {
      id: 10,
      question: "What role does 'constraint propagation' play in solving CSPs?",
      options: [
        "It generates new constraints to make the problem harder",
        "It selects the best algorithm for solving the CSP",
        "It uses constraints to reduce the number of legal values for a variable",
        "It assigns values to all variables at the start of the problem",
      ],
      correctAnswer:
        "It uses constraints to reduce the number of legal values for a variable",
    },
  ],
  "Adversarial-Search-and-Games": [
    {
      id: 1,
      question: "What is the primary focus of adversarial search in AI?",
      options: [
        "Finding the most efficient algorithm for data sorting",
        "Solving problems in competitive environments where agents have conflicting goals",
        "Predicting weather patterns using deep learning",
        "Enhancing user experience on web platforms",
      ],
      correctAnswer:
        "Solving problems in competitive environments where agents have conflicting goals",
    },
    {
      id: 2,
      question: "Which of the following best defines a zero-sum game?",
      options: [
        "A game where players cooperate to achieve a common goal",
        "A game where one player's gain is exactly equal to the other's loss",
        "A game that involves no competition or adversaries",
        "A game where both players can win simultaneously",
      ],
      correctAnswer:
        "A game where one player's gain is exactly equal to the other's loss",
    },
    {
      id: 3,
      question: "What does the minimax algorithm aim to achieve?",
      options: [
        "Maximize the minimum gain for the maximizing player in a game",
        "Minimize the computational resources required for game playing",
        "Maximize the game score regardless of the opponent's strategy",
        "Minimize the maximum possible loss in stock market predictions",
      ],
      correctAnswer:
        "Maximize the minimum gain for the maximizing player in a game",
    },
    {
      id: 4,
      question:
        "What is the purpose of alpha-beta pruning in game tree search?",
      options: [
        "To increase the branching factor of the game tree",
        "To prune away branches that cannot influence the final decision",
        "To add more nodes to the game tree for a comprehensive search",
        "To convert zero-sum games into cooperative games",
      ],
      correctAnswer:
        "To prune away branches that cannot influence the final decision",
    },
    {
      id: 5,
      question:
        "In the context of games, what is a heuristic evaluation function used for?",
      options: [
        "Determining the exact utility of terminal states",
        "Estimating the utility of a game state when the search is cut off early",
        "Calculating the total number of possible moves in a game",
        "Predicting the next move of the opponent with absolute certainty",
      ],
      correctAnswer:
        "Estimating the utility of a game state when the search is cut off early",
    },
    {
      id: 6,
      question:
        "What distinguishes Monte Carlo Tree Search (MCTS) from traditional minimax search?",
      options: [
        "MCTS relies entirely on random move selection without any evaluation",
        "MCTS uses deep learning algorithms to evaluate each move",
        "MCTS estimates state value by averaging outcomes of simulations of complete games",
        "MCTS guarantees finding the optimal move in any game",
      ],
      correctAnswer:
        "MCTS estimates state value by averaging outcomes of simulations of complete games",
    },
    {
      id: 7,
      question:
        "Which games are commonly studied in AI due to their deterministic, turn-taking, perfect information, and zero-sum nature?",
      options: [
        "Poker and Monopoly",
        "Chess and Go",
        "Candy Crush and Angry Birds",
        "Football and Basketball",
      ],
      correctAnswer: "Chess and Go",
    },
    {
      id: 8,
      question:
        "What is the main challenge when dealing with stochastic games in AI?",
      options: [
        "Determining the player's next move with perfect accuracy",
        "Incorporating randomness and chance elements into the game strategy",
        "Ensuring that all games result in a win-win outcome",
        "Reducing the game's complexity to a solvable level",
      ],
      correctAnswer:
        "Incorporating randomness and chance elements into the game strategy",
    },
    {
      id: 9,
      question:
        "How does partial observability affect strategy in games like Kriegspiel?",
      options: [
        "It eliminates the need for strategic planning",
        "It requires players to make moves based on complete knowledge of the game state",
        "It introduces uncertainty about the state of the board, requiring strategies for belief state management",
        "It makes the game deterministic and easier to solve",
      ],
      correctAnswer:
        "It introduces uncertainty about the state of the board, requiring strategies for belief state management",
    },
  ],
  "Logical-Agents": [
    {
      id: 1,
      question:
        "What is the primary function of a knowledge base (KB) in a knowledge-based agent?",
      options: [
        "To store the agent's programming code",
        "To perform mathematical computations for the agent",
        "To hold sentences representing assertions about the world",
        "To control the agent's hardware components",
      ],
      correctAnswer:
        "To hold sentences representing assertions about the world",
    },
    {
      id: 2,
      question:
        "What environment is commonly used to illustrate the operation of knowledge-based agents?",
      options: [
        "The Wumpus World",
        "The Game of Chess",
        "The Traveling Salesman Problem",
        "Real-world traffic navigation",
      ],
      correctAnswer: "The Wumpus World",
    },
    {
      id: 3,
      question:
        "In logical agents, what does the syntax of a representation language specify?",
      options: [
        "The truth value of sentences in the knowledge base",
        "The storage mechanism for the knowledge base",
        "All the sentences that are well formed in the language",
        "The programming language used for agent development",
      ],
      correctAnswer: "All the sentences that are well formed in the language",
    },
    {
      id: 4,
      question: "What does the 'semantics' of a logic define?",
      options: [
        "The programming syntax used to implement the logic",
        "The speed of the logical inference mechanism",
        "The truth of each sentence with respect to each possible world",
        "The physical structure of the agent's sensors and actuators",
      ],
      correctAnswer:
        "The truth of each sentence with respect to each possible world",
    },
    {
      id: 5,
      question:
        "What does it mean if a sentence α entails a sentence β (α |= β)?",
      options: [
        "β is true in some models in which α is true",
        "β is false in all models in which α is false",
        "α is false in all models in which β is true",
        "In every model in which α is true, β is also true",
      ],
      correctAnswer: "In every model in which α is true, β is also true",
    },
    {
      id: 6,
      question: "What is the significance of propositional logic in AI?",
      options: [
        "It is used exclusively for mathematical calculations",
        "It allows agents to perform physical tasks",
        "It provides a simple language for knowledge representation and reasoning",
        "It is the only logic used for building web applications",
      ],
      correctAnswer:
        "It provides a simple language for knowledge representation and reasoning",
    },
    {
      id: 7,
      question:
        "What is an example of a 'definite clause' in propositional logic?",
      options: [
        "A clause that contains exactly one positive and one negative literal",
        "A disjunction of literals of which exactly one is positive",
        "A clause that can only be true in a specific model",
        "A complex sentence formed by combining several negations",
      ],
      correctAnswer:
        "A disjunction of literals of which exactly one is positive",
    },
    {
      id: 8,
      question: "What does the DPLL algorithm solve?",
      options: [
        "The shortest path problem",
        "The SAT problem in propositional logic",
        "Database query optimization",
        "Real-time control of robots",
      ],
      correctAnswer: "The SAT problem in propositional logic",
    },
    {
      id: 9,
      question: "In the context of logical agents, what is a 'fluent'?",
      options: [
        "A type of logic specifically designed for fluid dynamics",
        "An aspect of the world that changes over time",
        "A fixed property of the environment that never changes",
        "A measure of the agent's efficiency in processing information",
      ],
      correctAnswer: "An aspect of the world that changes over time",
    },
    {
      id: 10,
      question: "What is 'forward chaining' in the context of Horn clauses?",
      options: [
        "A technique for adding new axioms to the knowledge base",
        "A method for proving the unsatisfiability of a set of clauses",
        "An inference algorithm that deduces new facts from known ones",
        "A procedure for optimizing the performance of knowledge-based agents",
      ],
      correctAnswer:
        "An inference algorithm that deduces new facts from known ones",
    },
  ],
  "First-Order-Logic": [
    {
      id: 1,
      question:
        "What is the primary advantage of first-order logic over propositional logic?",
      options: [
        "First-order logic requires fewer symbols.",
        "First-order logic can concisely represent relationships among objects.",
        "First-order logic eliminates the need for quantifiers.",
        "First-order logic is easier to automate.",
      ],
      correctAnswer:
        "First-order logic can concisely represent relationships among objects.",
    },
    {
      id: 2,
      question:
        "What fundamental element does a model in first-order logic include that propositional logic does not?",
      options: ["Functions", "Objects", "Constants", "Quantifiers"],
      correctAnswer: "Objects",
    },
    {
      id: 3,
      question:
        "In first-order logic, what type of quantifier implies the existence of at least one object satisfying a predicate?",
      options: [
        "Universal quantifier (∀)",
        "Existential quantifier (∃)",
        "Implicit quantifier",
        "Unique quantifier",
      ],
      correctAnswer: "Existential quantifier (∃)",
    },
    {
      id: 4,
      question:
        "Which of the following best describes the purpose of 'terms' in first-order logic?",
      options: [
        "To declare variables for use in functions",
        "To represent objects in the domain",
        "To connect predicates in complex sentences",
        "To define the scope of quantifiers",
      ],
      correctAnswer: "To represent objects in the domain",
    },
    {
      id: 5,
      question:
        "How does first-order logic represent the statement 'All humans are mortal'?",
      options: [
        "∀x Human(x) ⇒ Mortal(x)",
        "Human(x) ∧ Mortal(x)",
        "∃x Human(x) ∧ Mortal(x)",
        "Mortal(x) ⇒ Human(x)",
      ],
      correctAnswer: "∀x Human(x) ⇒ Mortal(x)",
    },
    {
      id: 6,
      question: "What is an atomic sentence in first-order logic?",
      options: [
        "A complex sentence formed by joining simpler sentences with logical connectives",
        "A sentence that can be divided into smaller sentences",
        "A sentence that expresses a simple fact without using logical connectives",
        "A sentence composed of quantified variables only",
      ],
      correctAnswer:
        "A sentence that expresses a simple fact without using logical connectives",
    },
    {
      id: 7,
      question:
        "In the context of first-order logic, what does a 'function' symbolize?",
      options: [
        "A computational procedure within the logic",
        "A relation among several objects",
        "A mapping from tuples of objects to objects",
        "A variable's scope within a domain",
      ],
      correctAnswer: "A mapping from tuples of objects to objects",
    },
    {
      id: 8,
      question: "What role do 'constant symbols' play in first-order logic?",
      options: [
        "They define the logic's syntax.",
        "They stand for specific objects in the domain.",
        "They represent the unchanging truths of the domain.",
        "They signify the immutable relationships between objects.",
      ],
      correctAnswer: "They stand for specific objects in the domain.",
    },
    {
      id: 9,
      question:
        "Which statement is true regarding the equality symbol in first-order logic?",
      options: [
        "It represents logical equivalence between sentences.",
        "It signifies that two terms refer to the same object.",
        "It is used exclusively within quantifiers for comparison.",
        "It denotes the identical functionality of two different functions.",
      ],
      correctAnswer: "It signifies that two terms refer to the same object.",
    },
    {
      id: 10,
      question:
        "Why is compositionality an important feature of representation languages like first-order logic?",
      options: [
        "It ensures that the language can be efficiently parsed by computers.",
        "It allows the meaning of a sentence to be determined from the meaning of its parts.",
        "It guarantees that the language can represent any possible world accurately.",
        "It makes the language more concise and easier to learn.",
      ],
      correctAnswer:
        "It allows the meaning of a sentence to be determined from the meaning of its parts.",
    },
  ],
  "Inference-in-First-Order-Logic": [
    {
      id: 1,
      question:
        "What is the primary function of the rule of Universal Instantiation in first-order logic?",
      options: [
        "It allows for the creation of new variables.",
        "It infers specific instances from a universally quantified statement.",
        "It universally quantifies any variable in a sentence.",
        "It eliminates the need for existential quantifiers.",
      ],
      correctAnswer:
        "It infers specific instances from a universally quantified statement.",
    },
    {
      id: 2,
      question:
        "What does the process of propositionalization involve in first-order logic inference?",
      options: [
        "Converting a first-order knowledge base to propositional logic to use propositional inference.",
        "Eliminating all propositions from a knowledge base.",
        "Converting existential quantifiers to universal quantifiers.",
        "Creating new propositions from existing first-order logic sentences.",
      ],
      correctAnswer:
        "Converting a first-order knowledge base to propositional logic to use propositional inference.",
    },
    {
      id: 3,
      question:
        "What role does unification play in first-order logic inference?",
      options: [
        "It generates infinite sets of ground-term substitutions.",
        "It finds substitutions that make different logical expressions identical.",
        "It simplifies logical expressions to their atomic form.",
        "It eliminates the need for propositional logic.",
      ],
      correctAnswer:
        "It finds substitutions that make different logical expressions identical.",
    },
    {
      id: 4,
      question:
        "Which of the following best describes the function of the Generalized Modus Ponens rule?",
      options: [
        "It applies only to ground terms without variables.",
        "It derives conclusions by matching a rule's premise with known facts.",
        "It generalizes conclusions from specific instances.",
        "It proves the equivalence of two logical sentences.",
      ],
      correctAnswer:
        "It derives conclusions by matching a rule's premise with known facts.",
    },
    {
      id: 5,
      question:
        "In the context of first-order logic, what does it mean for a clause to be 'standardized apart'?",
      options: [
        "The clause has been simplified to include only atomic sentences.",
        "The clause has been converted into its negated form.",
        "Variables in the clause have been renamed to avoid clashes.",
        "The clause has been divided into a set of simpler clauses.",
      ],
      correctAnswer:
        "Variables in the clause have been renamed to avoid clashes.",
    },
    {
      id: 6,
      question:
        "Which of the following is NOT a true statement about the process of Skolemization?",
      options: [
        "It removes existential quantifiers by introducing Skolem functions.",
        "It guarantees that the resulting sentence is logically equivalent to the original.",
        "It introduces new constant symbols to replace existentially quantified variables.",
        "It can be used to convert any first-order logic sentence into conjunctive normal form.",
      ],
      correctAnswer:
        "It guarantees that the resulting sentence is logically equivalent to the original.",
    },
    {
      id: 7,
      question:
        "What is the primary goal of using forward chaining in first-order logic inference?",
      options: [
        "To directly answer existential queries.",
        "To deduce new facts from a set of rules and known facts.",
        "To convert first-order logic sentences to propositional logic.",
        "To find the most general unifier for a set of sentences.",
      ],
      correctAnswer: "To deduce new facts from a set of rules and known facts.",
    },
    {
      id: 8,
      question:
        "What distinguishes backward chaining from forward chaining in the context of first-order logic?",
      options: [
        "Backward chaining cannot use unification.",
        "Backward chaining works backward from goals to known facts.",
        "Backward chaining is not complete for first-order logic.",
        "Backward chaining starts with known facts and applies rules to find goals.",
      ],
      correctAnswer:
        "Backward chaining works backward from goals to known facts.",
    },
    {
      id: 9,
      question:
        "Which inference method is complete for any knowledge base, not just definite clauses, in first-order logic?",
      options: [
        "Propositionalization",
        "Unification",
        "Forward chaining",
        "Resolution",
      ],
      correctAnswer: "Resolution",
    },
    {
      id: 10,
      question:
        "What problem does resolution aim to solve in first-order logic?",
      options: [
        "Resolving contradictions in a set of logical sentences.",
        "Finding contradictions by applying resolution steps to derive the empty clause.",
        "Resolving syntax errors in logical expressions.",
        "Simplifying complex logical sentences into their atomic components.",
      ],
      correctAnswer:
        "Finding contradictions by applying resolution steps to derive the empty clause.",
    },
  ],
  "Knowledge-Representation": [
    {
      id: 1,
      question: "What is ontological engineering primarily concerned with?",
      options: [
        "Designing efficient algorithms for machine learning.",
        "Organizing the world's entities into a structured hierarchy or ontology.",
        "Improving the computational speed of artificial intelligence systems.",
        "Developing new programming languages for artificial intelligence.",
      ],
      correctAnswer:
        "Organizing the world's entities into a structured hierarchy or ontology.",
    },
    {
      id: 2,
      question:
        "What distinguishes 'things' from 'stuff' in the context of knowledge representation?",
      options: [
        "Things are abstract concepts, while stuff is tangible.",
        "Things can be counted, while stuff cannot easily be individuated into distinct objects.",
        "Things are always physical objects, while stuff refers to mental concepts.",
        "Stuff can be counted, while things represent a collective quantity.",
      ],
      correctAnswer:
        "Things can be counted, while stuff cannot easily be individuated into distinct objects.",
    },
    {
      id: 3,
      question:
        "Which of the following is NOT a challenge in general ontological engineering?",
      options: [
        "Social and political factors complicating the agreement on a common ontology.",
        "The inherent complexity of the real world.",
        "The limitation of current technology to process complex ontologies.",
        "The ease of translating real-world facts into digital formats.",
      ],
      correctAnswer:
        "The ease of translating real-world facts into digital formats.",
    },
    {
      id: 4,
      question:
        "What is the purpose of using modal logic in knowledge representation?",
      options: [
        "To represent and reason about mathematical equations more effectively.",
        "To model knowledge and beliefs accurately using a collection of possible worlds.",
        "To enhance the graphical representation of knowledge bases.",
        "To simplify the construction of ontologies for domain-specific knowledge.",
      ],
      correctAnswer:
        "To model knowledge and beliefs accurately using a collection of possible worlds.",
    },
    {
      id: 5,
      question:
        "Which system is described as a graphical form of logic representing objects, categories, and the relationships between them?",
      options: [
        "Description logics",
        "Semantic networks",
        "The event calculus",
        "Truth Maintenance Systems (TMS)",
      ],
      correctAnswer: "Semantic networks",
    },
    {
      id: 6,
      question:
        "What does 'referential opacity' refer to in the context of propositional attitudes?",
      options: [
        "The transparency of logical expressions regardless of the terms used.",
        "The condition where the specific terms used to refer to an object do matter.",
        "The inability to deduce new beliefs from existing ones.",
        "The opaque nature of modal logic when applied to real-world scenarios.",
      ],
      correctAnswer:
        "The condition where the specific terms used to refer to an object do matter.",
    },
    {
      id: 7,
      question:
        "What challenge does the 'Nixon diamond' illustrate in default logic?",
      options: [
        "The difficulty of representing numerical data in logical systems.",
        "Conflicting defaults about a subject being resolved through multiple extensions.",
        "The challenge of integrating semantic networks with description logics.",
        "The problem of encoding events and actions in a static ontology.",
      ],
      correctAnswer:
        "Conflicting defaults about a subject being resolved through multiple extensions.",
    },
    {
      id: 8,
      question:
        "Why are Truth Maintenance Systems (TMS) important in reasoning with default information?",
      options: [
        "They provide a mechanism for explaining conclusions through the tracing of assumptions.",
        "They simplify the conversion of first-order logic sentences into propositional logic.",
        "They eliminate the need for nonmonotonic logics such as circumscription.",
        "They serve as the primary method for constructing ontologies.",
      ],
      correctAnswer:
        "They provide a mechanism for explaining conclusions through the tracing of assumptions.",
    },
    {
      id: 9,
      question:
        "Which of the following best describes the role of description logics in knowledge representation?",
      options: [
        "They prioritize the graphical representation of knowledge bases for better visualization.",
        "They focus on defining and combining categories with a formal language for efficient inference.",
        "They are primarily used for processing natural language within artificial intelligence systems.",
        "They are used to represent time and events through a structured logical framework.",
      ],
      correctAnswer:
        "They focus on defining and combining categories with a formal language for efficient inference.",
    },
  ],
  "Automated-Planning": [
    {
      id: 1,
      question:
        "What is the primary purpose of the Planning Domain Definition Language (PDDL)?",
      options: [
        "To provide a programming language for developing artificial intelligence algorithms.",
        "To offer a natural, succinct, scalable, and heuristic-free domain representation for planning problems.",
        "To enhance the graphical visualization of planning domains.",
        "To create a database of planning algorithms for easy retrieval.",
      ],
      correctAnswer:
        "To offer a natural, succinct, scalable, and heuristic-free domain representation for planning problems.",
    },
    {
      id: 2,
      question:
        "In classical planning, what makes an action applicable in a given state?",
      options: [
        "Its precondition contradicts the current state.",
        "Its effect is already present in the current state.",
        "Its precondition is satisfied by the current state.",
        "It has no precondition or effect defined.",
      ],
      correctAnswer: "Its precondition is satisfied by the current state.",
    },
    {
      id: 3,
      question:
        "What type of planning involves finding a sequence of actions that transition from the initial belief state to a belief state where the goal is satisfied?",
      options: [
        "Sensorless Planning",
        "Contingent Planning",
        "Online Planning",
        "Hierarchical Planning",
      ],
      correctAnswer: "Sensorless Planning",
    },
    {
      id: 4,
      question:
        "Which of the following best describes Hierarchical Task Networks (HTN) in the context of planning?",
      options: [
        "They are networks that prioritize tasks based on their complexity and interdependencies.",
        "They utilize high-level actions (HLAs) to structure planning into manageable levels of detail.",
        "They represent planning problems as neural networks for machine learning applications.",
        "They organize tasks in a linear sequence to simplify the planning process.",
      ],
      correctAnswer:
        "They utilize high-level actions (HLAs) to structure planning into manageable levels of detail.",
    },
    {
      id: 5,
      question:
        "In the context of planning and acting in nondeterministic domains, what does 'contingent planning' entail?",
      options: [
        "Creating a single, rigid plan that the agent must follow exactly.",
        "Generating plans that include conditional branches based on potential observations.",
        "Planning without considering the outcomes of actions.",
        "Relying solely on predetermined sequences without any adaptation.",
      ],
      correctAnswer:
        "Generating plans that include conditional branches based on potential observations.",
    },
    {
      id: 6,
      question:
        "Which planning approach transforms a planning problem into a set of propositional logic sentences to leverage the efficiency of modern SAT solvers?",
      options: [
        "Forward state-space search",
        "Backward search",
        "Planning as Boolean satisfiability",
        "Graphplan",
      ],
      correctAnswer: "Planning as Boolean satisfiability",
    },
    {
      id: 7,
      question:
        "What heuristic in planning ignores the delete lists of actions, ensuring no action can undo the progress made by another?",
      options: [
        "Ignore-Preconditions Heuristic",
        "Ignore-Delete-Lists Heuristic",
        "Preferred Actions",
        "Serializability of Subgoals",
      ],
      correctAnswer: "Ignore-Delete-Lists Heuristic",
    },
    {
      id: 8,
      question:
        "What does 'angelic semantics' in the context of hierarchical planning refer to?",
      options: [
        "The assignment of moral values to actions within the planning domain.",
        "Defining the effects of high-level actions in terms of the 'reachable set' of states that the action can lead to.",
        "The elimination of all negative effects from planning actions.",
        "The use of divine intervention to ensure planning success.",
      ],
      correctAnswer:
        "Defining the effects of high-level actions in terms of the 'reachable set' of states that the action can lead to.",
    },
    {
      id: 9,
      question:
        "What challenge does planning face when considering actions with uncertain outcomes?",
      options: [
        "Determining the exact duration of each action.",
        "Calculating the precise cost of actions in terms of resources.",
        "Ensuring that actions achieve their goals without any unintended consequences.",
        "Managing the plan to adapt to different outcomes of actions.",
      ],
      correctAnswer:
        "Managing the plan to adapt to different outcomes of actions.",
    },
    {
      id: 10,
      question:
        "Which planning method involves refining high-level actions into sequences of simpler actions or other high-level actions?",
      options: [
        "Online Planning",
        "Contingent Planning",
        "Hierarchical Planning",
        "Sensorless Planning",
      ],
      correctAnswer: "Hierarchical Planning",
    },
  ],
  "Quantifying-Uncertainty": [
    {
      id: 1,
      question:
        "What does probability theory primarily deal with in the context of AI?",
      options: [
        "Determining the fastest algorithm for a given task",
        "Managing uncertainty through numeric degrees of belief",
        "Ensuring that computer programs can operate without errors",
        "Calculating the exact outcomes of actions in deterministic environments",
      ],
      correctAnswer: "Managing uncertainty through numeric degrees of belief",
    },
    {
      id: 2,
      question:
        "Why is probability theory used in scenarios like medical diagnoses?",
      options: [
        "Because it provides absolute answers",
        "Due to its ability to operate without any data",
        "It accommodates the complexity of linking symptoms to conditions non-strictly logically",
        "Because it simplifies medical training",
      ],
      correctAnswer:
        "It accommodates the complexity of linking symptoms to conditions non-strictly logically",
    },
    {
      id: 3,
      question:
        "What is the challenge referred to as the 'logical qualification problem'?",
      options: [
        "The inability of logic to handle arithmetic operations",
        "The impracticality of listing all conditions necessary for a rule's application",
        "The need to manually input data into logical systems",
        "Logic's limitation in simulating human reasoning",
      ],
      correctAnswer:
        "The impracticality of listing all conditions necessary for a rule's application",
    },
    {
      id: 4,
      question: "What does Bayes' Rule enable in AI systems?",
      options: [
        "Turning causal knowledge into diagnostic insights",
        "Eliminating the need for data in decision making",
        "Making logical inference obsolete",
        "Creating deterministic models from nondeterministic data",
      ],
      correctAnswer: "Turning causal knowledge into diagnostic insights",
    },
    {
      id: 5,
      question: "What role does decision theory play in AI?",
      options: [
        "It dictates the programming languages used in AI development",
        "Guides rational agents to select actions yielding the highest expected utility",
        "Ensures AI systems can operate without external inputs",
        "Focuses on the aesthetic design of AI interfaces",
      ],
      correctAnswer:
        "Guides rational agents to select actions yielding the highest expected utility",
    },
    {
      id: 6,
      question: "What signifies a 'full joint probability distribution' in AI?",
      options: [
        "A distribution that covers all programming languages",
        "A table that specifies the probability for every possible assignment of values to variables",
        "A graphical representation of an AI's architecture",
        "A list of all AI systems developed to date",
      ],
      correctAnswer:
        "A table that specifies the probability for every possible assignment of values to variables",
    },
    {
      id: 7,
      question:
        "Why is the naive Bayes model considered effective despite its simplicity?",
      options: [
        "Because it requires no data to make predictions",
        "It assumes conditional independence among effects, simplifying calculations",
        "Due to its use of advanced calculus in probability estimations",
        "It only applies to simple, deterministic tasks",
      ],
      correctAnswer:
        "It assumes conditional independence among effects, simplifying calculations",
    },
    {
      id: 8,
      question: "How does Bayes' Rule facilitate handling uncertainty in AI?",
      options: [
        "By allowing AI to make decisions without any information",
        "Through simplifying the programming needed for AI development",
        "Enabling the computation of unknown probabilities from known conditional probabilities",
        "Eliminating the need for probabilities in AI altogether",
      ],
      correctAnswer:
        "Enabling the computation of unknown probabilities from known conditional probabilities",
    },
    {
      id: 9,
      question:
        "What is a key advantage of expressing probabilities for combinations of events?",
      options: [
        "It enables the use of logic to predict future events accurately",
        "Allows for the reduction of computational resources needed",
        "Facilitates concise expressions of complex probabilistic relationships",
        "Prevents AI systems from making errors",
      ],
      correctAnswer:
        "Facilitates concise expressions of complex probabilistic relationships",
    },
    {
      id: 10,
      question:
        "What challenge does the 'full joint distribution' method face in practical applications?",
      options: [
        "It is too simplistic to be of any real use",
        "The method becomes computationally infeasible with increasing numbers of variables",
        "It requires the AI to have emotions",
        "The method can only be applied in theoretical physics",
      ],
      correctAnswer:
        "The method becomes computationally infeasible with increasing numbers of variables",
    },
  ],
  "Probabilistic-Reasoning": [
    {
      id: 1,
      question: "What is the primary function of Bayesian networks in AI?",
      options: [
        "To compute complex algorithms more efficiently.",
        "To represent relationships of independence and conditional independence among variables.",
        "To visually represent data for user interfaces.",
        "To encrypt data using probabilistic methods.",
      ],
      correctAnswer:
        "To represent relationships of independence and conditional independence among variables.",
    },
    {
      id: 2,
      question: "What does a node in a Bayesian network represent?",
      options: [
        "A specific algorithm used in AI computation.",
        "A random variable within the uncertain domain being modeled.",
        "A visual representation of user data.",
        "The probability of a network's failure.",
      ],
      correctAnswer:
        "A random variable within the uncertain domain being modeled.",
    },
    {
      id: 3,
      question:
        "How do Bayesian networks simplify the representation of the full joint probability distribution?",
      options: [
        "By limiting the network to only two variables.",
        "By using directed acyclic graphs with nodes and edges to encapsulate dependencies.",
        "By eliminating the need for probabilities in the model.",
        "Through the use of quantum computing methods.",
      ],
      correctAnswer:
        "By using directed acyclic graphs with nodes and edges to encapsulate dependencies.",
    },
    {
      id: 4,
      question:
        "What kind of probability information does each node in a Bayesian network carry?",
      options: [
        "The network's overall error rate.",
        "Information defining the effects of parent nodes on the node.",
        "Data encryption probabilities for network security.",
        "The likelihood of user interaction with the node.",
      ],
      correctAnswer:
        "Information defining the effects of parent nodes on the node.",
    },
    {
      id: 5,
      question: "In a Bayesian network, what do edges typically represent?",
      options: [
        "The physical layout of a computer network.",
        "Direct influences or parent-child relationships between variables.",
        "A hierarchy of network administrators.",
        "The bandwidth capacity between nodes.",
      ],
      correctAnswer:
        "Direct influences or parent-child relationships between variables.",
    },
    {
      id: 6,
      question:
        "What are Conditional Probability Tables (CPTs) used for in Bayesian networks?",
      options: [
        "To encrypt conditional statements for network security.",
        "To detail the effect of parent nodes on a child node.",
        "To outline all possible network configurations.",
        "For storing user preferences in a network.",
      ],
      correctAnswer: "To detail the effect of parent nodes on a child node.",
    },
    {
      id: 7,
      question:
        "Why are approximate inference methods used in Bayesian networks?",
      options: [
        "To make the network run faster with no concern for accuracy.",
        "Because exact inference is often intractable in large networks.",
        "To reduce the cost of network maintenance.",
        "For the purpose of simplifying network design.",
      ],
      correctAnswer:
        "Because exact inference is often intractable in large networks.",
    },
    {
      id: 8,
      question: "What does the 'do-operator' represent in causal networks?",
      options: [
        "A function that performs network diagnostics.",
        "A formalization of interventions within causal networks.",
        "The initialization process of a network.",
        "A command that restarts the network.",
      ],
      correctAnswer: "A formalization of interventions within causal networks.",
    },
    {
      id: 9,
      question:
        "How can the effects of interventions be predicted in causal networks?",
      options: [
        "By using the back-door criterion to estimate effects without detailed knowledge of all causal mechanisms.",
        "Through random sampling of network nodes.",
        "By shutting down the network and observing changes.",
        "Using traditional methods that don't account for causal relationships.",
      ],
      correctAnswer:
        "By using the back-door criterion to estimate effects without detailed knowledge of all causal mechanisms.",
    },
    {
      id: 10,
      question:
        "Why is conditional independence important in Bayesian networks?",
      options: [
        "It is not significant; it's just a theoretical concept.",
        "It enables the network to function without electricity.",
        "It simplifies probabilistic reasoning and representation by reducing the amount of required information.",
        "To increase the network's data storage capacity.",
      ],
      correctAnswer:
        "It simplifies probabilistic reasoning and representation by reducing the amount of required information.",
    },
  ],
  "Best-first-search": [
    {
      id: 1,
      question: "What is the main principle behind best-first search?",
      options: [
        "Expanding the nodes in the order they were added to the priority queue.",
        "Using a specific rule to choose the most promising node to explore next.",
        "Exploring all possible paths simultaneously.",
        "Selecting nodes to expand at random.",
      ],
      correctAnswer:
        "Using a specific rule to choose the most promising node to explore next.",
    },
    {
      id: 2,
      question:
        "What does the evaluation function in best-first search estimate?",
      options: [
        "The total number of nodes in the graph.",
        "The 'closeness' of a node to the goal.",
        "The complexity of the algorithm.",
        "The number of successors of a node.",
      ],
      correctAnswer: "The 'closeness' of a node to the goal.",
    },
    {
      id: 3,
      question:
        "What data structure is typically used to implement the priority queue in best-first search?",
      options: ["Array", "Linked list", "Min-heap", "Stack"],
      correctAnswer: "Min-heap",
    },
    {
      id: 4,
      question:
        "Which variant of best-first search uses only the estimated cost from the node to the goal for its evaluation function?",
      options: [
        "Uniform Cost Search",
        "Greedy Best-First Search",
        "Depth-First Search",
        "Breadth-First Search",
      ],
      correctAnswer: "Greedy Best-First Search",
    },
    {
      id: 5,
      question:
        "What combination does the A* search algorithm use for its evaluation function?",
      options: [
        "Actual cost to reach the node and the estimated cost from the node to the goal",
        "The number of nodes expanded and the depth of the tree",
        "The memory used by the algorithm and the time complexity",
        "The depth of the node and the estimated time to reach the goal",
      ],
      correctAnswer:
        "Actual cost to reach the node and the estimated cost from the node to the goal",
    },
    {
      id: 6,
      question:
        "Why might greedy best-first search fail to find the shortest path to the goal?",
      options: [
        "It prioritizes nodes based on their historical performance.",
        "It can get stuck in loops or overlook the goal due to focusing only on estimated cost to the goal.",
        "It evaluates all possible paths before making a decision.",
        "It only expands the first node added to the priority queue.",
      ],
      correctAnswer:
        "It can get stuck in loops or overlook the goal due to focusing only on estimated cost to the goal.",
    },
    {
      id: 7,
      question:
        "What property must the heuristic function (h(n)) satisfy for A* search to be optimal?",
      options: [
        "It must be admissible and consistent.",
        "It must be exponential in nature.",
        "It should always overestimate the true cost.",
        "It should prioritize nodes randomly.",
      ],
      correctAnswer: "It must be admissible and consistent.",
    },
    {
      id: 8,
      question: "What is a major disadvantage of best-first search?",
      options: [
        "It guarantees to find the shortest path in all cases.",
        "It requires significant memory, especially for large graphs.",
        "It is less efficient than uninformed search strategies.",
        "It cannot be used for graph traversal problems.",
      ],
      correctAnswer:
        "It requires significant memory, especially for large graphs.",
    },
    {
      id: 9,
      question: "In what scenario is best-first search particularly useful?",
      options: [
        "When exploring all nodes is required to find the goal.",
        "In pathfinding for navigation and maps.",
        "When the evaluation function is unknown.",
        "For problems where memory usage is not a concern.",
      ],
      correctAnswer: "In pathfinding for navigation and maps.",
    },
    {
      id: 10,
      question:
        "What makes best-first search flexible and adaptable to a wide range of problems?",
      options: [
        "Its use of a uniform cost function.",
        "The algorithm's ability to run without any domain-specific information.",
        "Modifying the evaluation function to fit the specific requirements of a problem.",
        "The fact that it does not use a priority queue.",
      ],
      correctAnswer:
        "Modifying the evaluation function to fit the specific requirements of a problem.",
    },
  ],
  "Breadth-first-search": [
    {
      id: 1,
      question:
        "What type of graph traversal does Breadth-first search (BFS) perform?",
      options: [
        "Depth-first",
        "Broadest possible",
        "Random",
        "Least-cost path",
      ],
      correctAnswer: "Broadest possible",
    },
    {
      id: 2,
      question:
        "Which data structure is primarily used in the implementation of BFS?",
      options: ["Stack", "Queue", "Priority queue", "Linked list"],
      correctAnswer: "Queue",
    },
    {
      id: 3,
      question:
        "What is the time complexity of BFS for a graph represented using an adjacency list?",
      options: ["O(V + E)", "O(V^2)", "O(log V)", "O(E log V)"],
      correctAnswer: "O(V + E)",
    },
    {
      id: 4,
      question: "BFS is particularly useful for finding:",
      options: [
        "The most complex path",
        "The longest path without repeating nodes",
        "The shortest path on unweighted graphs",
        "All possible paths between two vertices",
      ],
      correctAnswer: "The shortest path on unweighted graphs",
    },
    {
      id: 5,
      question: "Which of the following properties does BFS have?",
      options: [
        "Incompleteness",
        "Suboptimality",
        "Completeness and optimality for unweighted graphs",
        "High space efficiency",
      ],
      correctAnswer: "Completeness and optimality for unweighted graphs",
    },
    {
      id: 6,
      question: "In which scenario is BFS NOT the optimal choice?",
      options: [
        "Finding shortest path in an unweighted graph",
        "Solving puzzles with the least number of moves",
        "Pathfinding in weighted graphs",
        "Exploring all neighbor nodes first",
      ],
      correctAnswer: "Pathfinding in weighted graphs",
    },
    {
      id: 7,
      question:
        "How does BFS guarantee the shortest path in unweighted graphs?",
      options: [
        "By exploring the deepest node first",
        "By visiting all neighbors of a node before proceeding to their children",
        "By calculating the total cost of path",
        "Through heuristic evaluation",
      ],
      correctAnswer:
        "By visiting all neighbors of a node before proceeding to their children",
    },
    {
      id: 8,
      question: "Which application does NOT use BFS?",
      options: [
        "Finding the minimum spanning tree",
        "Generating mazes for computer games",
        "GPS navigation systems",
        "Determining strong components in a directed graph",
      ],
      correctAnswer: "Determining strong components in a directed graph",
    },
    {
      id: 9,
      question: "What is a key disadvantage of BFS?",
      options: [
        "It cannot find the goal",
        "It is not optimal for weighted graphs",
        "Significant space complexity",
        "It is slower than depth-first search",
      ],
      correctAnswer: "Significant space complexity",
    },
    {
      id: 10,
      question: "What does the BFS algorithm primarily identify in a network?",
      options: [
        "Strongest connection",
        "Shortest connection path",
        "Most active node",
        "Least used path",
      ],
      correctAnswer: "Shortest connection path",
    },
  ],

  // Add more lessons as needed
};

export default quizData;
