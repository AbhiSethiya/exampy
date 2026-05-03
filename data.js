const subjectsData = [
  {
    id: "daa",
    label: "Design & Analysis of Algorithms",
    theme: { primary: "#D85A30", bg: "#FAECE720" },
    units: [
      {
        unit: 1, title: "Unit 1", sub: "Algorithm Analysis & Complexity",
        questions: [
          { q: "Solve recurrence relations using Master's Theorem / substitution / tree method (multiple relations given — e.g. T(n)=2T(n/2)+√n, T(n)=4T(n/2)+logn, T(n)=3T(n/3)+n).", freq: "must", marks: [6] },
          { q: "Explain space and time complexity. What are the various asymptotic notations (Big-O, Ω, Θ)? Explain with examples.", freq: "must", marks: [4,6] },
          { q: "Write algorithm for Bubble Sort / Selection Sort and analyse its best, worst, and average case complexity.", freq: "must", marks: [4,6] },
          { q: "Sort given elements using Selection Sort in ascending order. Also write best, worst, and average case complexity.", freq: "high", marks: [6] },
          { q: "Justify why Quick Sort has worst-case time complexity O(n²). Explain with a suitable example (already-sorted/reverse-sorted input).", freq: "high", marks: [4] },
          { q: "Explain Bucket Sort vs Radix Sort in terms of implementation and efficiency. Demonstrate a worst-case scenario for Bucket Sort.", freq: "low", marks: [6] }
        ]
      },
      {
        unit: 2, title: "Unit 2", sub: "Divide and Conquer",
        questions: [
          { q: "Explain Strassen's Matrix Multiplication. How is it better than normal 2×2 matrix multiplication in terms of complexity? Analyse complexity.", freq: "must", marks: [6,8] },
          { q: "Sort given elements using Quick Sort and / or Merge Sort. Analyse complexity.", freq: "must", marks: [8] },
          { q: "Write recursive Binary Search algorithm. Also analyse its complexity (best, worst, average).", freq: "must", marks: [6] },
          { q: "Explain the concept of Max Heap and Min Heap with example.", freq: "high", marks: [4] },
          { q: "Sort given elements using Heap Sort (Max Heap). Show steps.", freq: "high", marks: [7] },
          { q: "What is the significance of Divide and Conquer strategy?", freq: "low", marks: [2] }
        ]
      },
      {
        unit: 3, title: "Unit 3", sub: "Greedy Method",
        questions: [
          { q: "Solve Fractional Knapsack problem using Greedy Strategy (numerical). Find maximum profit. (Capacity=100, weights & values given.)", freq: "must", marks: [6,7] },
          { q: "Huffman Coding: Build Huffman tree and find Huffman codes for given characters and frequencies.", freq: "must", marks: [6,7] },
          { q: "Differentiate between Prim's and Kruskal's algorithms for Minimum Spanning Tree (MST). Apply one on a given graph.", freq: "must", marks: [4,6] },
          { q: "Apply Dijkstra's Algorithm on a given digraph. Find shortest path from source to all vertices. Show table of selected nodes and distances.", freq: "high", marks: [6] },
          { q: "Write basic algorithm for Greedy technique. Define Greedy strategy. Differentiate between Optimal and Feasible solution.", freq: "high", marks: [3,4] },
          { q: "Job Sequencing with deadlines: Find maximum profit sequence for given jobs (profit and deadline table given).", freq: "high", marks: [6] },
          { q: "Find Optimal Merge Pattern for given set of files (e.g. 7 files with lengths 12, 9, 3, 11, 15, 20, 13).", freq: "low", marks: [4] }
        ]
      },
      {
        unit: 4, title: "Unit 4", sub: "Dynamic Programming",
        questions: [
          { q: "Solve 0/1 Knapsack problem using Dynamic Programming (numerical with n=4 or similar, weights and profits given).", freq: "must", marks: [6,7] },
          { q: "Define Multistage Graph. Find shortest path from S to T using Forward approach (same graph appears in 3 papers).", freq: "must", marks: [6] },
          { q: "What is Dynamic Programming? Explain the Principle of Optimality. Write any two benefits. Differentiate DP vs Greedy method.", freq: "must", marks: [4] },
          { q: "Find Longest Common Subsequence (LCS) of two given strings using Dynamic Programming (X=\"ACDBE\", Y=\"ABCDE\" or similar).", freq: "high", marks: [6] },
          { q: "Explain Reliability Design / three-stage system using Dynamic Programming (given device costs and reliabilities).", freq: "high", marks: [6] },
          { q: "Using Floyd's Algorithm, find all-pair shortest path for a given graph.", freq: "low", marks: [6] }
        ]
      },
      {
        unit: 5, title: "Unit 5", sub: "Backtracking, Branch & Bound, NP",
        questions: [
          { q: "Elaborate how backtracking technique can be used to solve the N-Queens problem. Explain with an example.", freq: "must", marks: [5] },
          { q: "Explain P, NP, NP-Complete, and NP-Hard problems with examples. Define the group NP-Complete (problems that are both NP and NP-Hard).", freq: "must", marks: [5] },
          { q: "Explain Graph Coloring using Backtracking with the help of an example.", freq: "high", marks: [5] },
          { q: "Explain the method of reduction / Branch and Bound to solve the Travelling Salesman Problem (TSP).", freq: "high", marks: [5] },
          { q: "Explain the difference between Backtracking and Branch & Bound approaches with suitable examples.", freq: "high", marks: [5] },
          { q: "Explain Sum of Subsets problem and how Backtracking helps solve it.", freq: "low", marks: [5] },
          { q: "Define Hamiltonian cycle / circuit. Explain with an example.", freq: "low", marks: [5] }
        ]
      }
    ]
  },
  {
    id: "agile",
    label: "Agile Development",
    theme: { primary: "#0F6E56", bg: "#E1F5EE20" },
    units: [
      {
        unit: 1, title: "Unit 1", sub: "Agile Fundamentals",
        questions: [
          { q: "What are Agile methods and the principles behind the Agile Manifesto? (4 values + 12 principles — explain at least 4 principles for marks.)", freq: "must", marks: [5,6] },
          { q: "Define Agile methodology. Why is Agile used? (Iterative & incremental approach, customer collaboration, benefits.)", freq: "must", marks: [2,5] },
          { q: "Mention at least 5 challenges involved in developing Agile software.", freq: "must", marks: [3,5] },
          { q: "Explain the benefits of Agile for the development team and customers. / Enlist benefits of Agile over Waterfall development.", freq: "must", marks: [5] },
          { q: "How is Agile methodology different from traditional (Waterfall) methodology? (Differentiate with at least 6 differences.)", freq: "high", marks: [6] },
          { q: "What is the Lean approach? How does it work (7 principles)? How does it enhance Agile methodologies?", freq: "high", marks: [5,8] },
          { q: "What are the core principles of Agile related to customer satisfaction and quality?", freq: "low", marks: [5] }
        ]
      },
      {
        unit: 2, title: "Unit 2", sub: "Scrum & Extreme Programming (XP)",
        questions: [
          { q: "Discuss the roles typically found in an Agile / Scrum team (Product Owner, Scrum Master, Dev Team). How do they differ from traditional project structures?", freq: "must", marks: [5,8] },
          { q: "What are the core practices of XP (Extreme Programming)? How do they promote rapid development and continuous improvement?", freq: "must", marks: [6,8] },
          { q: "What is pair programming? What are its benefits?", freq: "must", marks: [4] },
          { q: "Explain XP project lifecycle. Also explain the controversies in XP.", freq: "high", marks: [6] },
          { q: "Compare Lean and Scrum. (Focus, timeline, roles, meetings, change handling.)", freq: "high", marks: [2,5] },
          { q: "What is the purpose of Sprint Retrospective in Scrum? Also explain Sprint Planning.", freq: "high", marks: [7] },
          { q: "Describe various attributes a development team should embrace to change team philosophy (Self-organizing, cross-functional, T-shaped skills, collective ownership, transparency).", freq: "high", marks: [8] },
          { q: "What are the various advanced Scrum applications? (Scrum of Scrums, LeSS, SAFe, Nexus, Distributed Scrum.)", freq: "low", marks: [5] }
        ]
      },
      {
        unit: 3, title: "Unit 3", sub: "Planning, User Stories & Roadmap",
        questions: [
          { q: "What is meant by User Stories? How are they used? How do they differ from traditional software requirements? Give a suitable example (As a [Role], I want [Action], so that [Benefit]).", freq: "must", marks: [6,7] },
          { q: "What is a Burndown Chart? How is it used in an Agile project? What does it show?", freq: "must", marks: [3,6] },
          { q: "Define Sprints and Product Backlog. (Sprint = time-boxed iteration; Product Backlog = master ordered list managed by Product Owner.)", freq: "must", marks: [2,4] },
          { q: "What is a Product Roadmap? How does it align stakeholders? What are common challenges in creating and maintaining one?", freq: "high", marks: [4,7] },
          { q: "What is the purpose of Sprint Planning? What factors should the team consider when estimating effort for each sprint backlog item? (Complexity, uncertainty, volume, dependencies.)", freq: "high", marks: [7] },
          { q: "Define Theme, Feature, and User Stories (the hierarchy: Theme → Epic → Feature → User Story).", freq: "high", marks: [3] },
          { q: "How do you write a Product Vision in Scrum? (Moore's Template: FOR / WHO / THE / THAT / UNLIKE / OUR PRODUCT.)", freq: "low", marks: [3] },
          { q: "Define Sprint Backlog and describe activities performed in a Sprint Planning meeting.", freq: "low", marks: [6] }
        ]
      },
      {
        unit: 4, title: "Unit 4", sub: "Risk, Cost & Procurement in Agile",
        questions: [
          { q: "Name some common risks in Agile projects. How does Agile's emphasis on collaboration help mitigate risk? (Scope creep, lack of documentation, burnout, customer unavailability, technical debt.)", freq: "must", marks: [6] },
          { q: "Explain Procurement Management in Agile in detail. (Collaborative contracting, fixed price per iteration, shared risk, multi-stage tendering — Agile vs Traditional procurement.)", freq: "must", marks: [4] },
          { q: "How are budgets managed in Agile projects? How does Agile handle changes in scope and their impact on cost? (Fixed time & cost, variable scope; burn rate; trading features.)", freq: "high", marks: [6] },
          { q: "Explain Risk Management in Agile. (Risk monitoring, risk planning, risk analysis, risk identification.)", freq: "high", marks: [6] },
          { q: "How can you create an environment that supports Agile practices? (Collocation, information radiators, psychological safety, servant leadership.)", freq: "low", marks: [8] }
        ]
      },
      {
        unit: 5, title: "Unit 5", sub: "Agile Tools, Metrics & Project Management",
        questions: [
          { q: "What are the most critical Agile metrics? List Agile project management tools and their roles in project planning. (Velocity, burndown, cycle time, lead time — tools like Jira, Trello, etc.)", freq: "must", marks: [4,6] },
          { q: "What are the essential qualities / responsibilities of a Scrum Master? How does the Scrum Master handle conflict within the development team?", freq: "must", marks: [5] },
          { q: "When should we NOT use Agile? Write major challenges with Agile project management.", freq: "high", marks: [5] },
          { q: "What are the key benefits and key resources for Agile project management?", freq: "high", marks: [5] },
          { q: "What strategies can an Agile project manager employ to act as a change agent and drive Agile adoption within an organization?", freq: "high", marks: [5] },
          { q: "Define Velocity of Scrum team. How is it calculated? How does Velocity help in release planning?", freq: "low", marks: [4] },
          { q: "Differentiate Scrum vs Kanban. What are the key benefits of both?", freq: "low", marks: [5] }
        ]
      }
    ]
  },
  {
    id: "cd",
    label: "Compiler Design",
    theme: { primary: "#533AB7", bg: "#EEEDFE20" },
    units: [
      {
        unit: 1, title: "Unit I", sub: "Compiler basics · Lexical analysis · Phases",
        questions: [
          { q: "Explain the phases of a compiler with a neat block diagram.", freq: "must", marks: [5,6,4] },
          { q: "Explain the role of lexical analyzer — what it does, input/output, tokens, lexemes.", freq: "must", marks: [3,6] },
          { q: "What are the different types of compilers? Explain with examples (native, two-pass, cross, bootstrap).", freq: "must", marks: [3,6] },
          { q: "What is the role of the symbol table in compiler design? Explain its operations and implementations.", freq: "must", marks: [2,3] },
          { q: "What is the role of error handler in compiler design?", freq: "high", marks: [2] },
          { q: "Explain the concept of input buffering in lexical analysis — one buffer and two buffer scheme.", freq: "high", marks: [5,3] },
          { q: "Define pass structure of a compiler. Explain its types.", freq: "high", marks: [2,5] },
          { q: "What is the advantage of dividing compiler design into front-end and back-end?", freq: "high", marks: [5] },
          { q: "Define translator, interpreter, and assembler. Differentiate compiler vs interpreter.", freq: "high", marks: [3,2] },
          { q: "Define cross compiler and bootstrapping with examples.", freq: "med", marks: [4,6] },
          { q: "Find number of tokens in a given C code snippet.", freq: "med", marks: [2] },
          { q: "Explain the role of finite automata (FSA/DFA) in lexical analysis.", freq: "med", marks: [6] },
        ]
      },
      {
        unit: 2, title: "Unit II", sub: "Top-down parsing · First & Follow · LL(1)",
        questions: [
          { q: "Compute FIRST() and FOLLOW() for a given grammar (e.g. expression grammar E→TE', T→FT', etc.).", freq: "must", marks: [8,4] },
          { q: "What is ambiguous grammar? Define with example. Check if a given grammar is ambiguous.", freq: "must", marks: [2,8] },
          { q: "Remove left recursion from a given grammar and calculate FIRST and FOLLOW.", freq: "must", marks: [7,8] },
          { q: "Do left factoring for a given grammar (e.g. A → aAB / aBc / aAc).", freq: "must", marks: [2,7] },
          { q: "Construct LL(1) parsing table for a given grammar and check if it is LL(1) or not.", freq: "must", marks: [7,8,6] },
          { q: "Explain recursive descent parser. How does predictive parsing avoid backtracking?", freq: "must", marks: [2,6] },
          { q: "Differentiate top-down and bottom-up parsing techniques.", freq: "must", marks: [3,4,2] },
          { q: "What are the problems with top-down parsing?", freq: "high", marks: [2] },
          { q: "Compare predictive parser and shift-reduce parser.", freq: "high", marks: [3] },
          { q: "What is LL(1) grammar? How is the parsing table constructed? Explain with example.", freq: "high", marks: [6] },
        ]
      },
      {
        unit: 3, title: "Unit III", sub: "Bottom-up parsing · SLR · CLR · LALR · Operator",
        questions: [
          { q: "Construct SLR(1) parsing table for a given grammar. Parse a given string using the table.", freq: "must", marks: [7,6] },
          { q: "Construct CLR / Canonical LR(1) parsing table for a given grammar.", freq: "must", marks: [7,6] },
          { q: "Construct LALR(1) parsing table for a given grammar.", freq: "must", marks: [7] },
          { q: "Define LR(0) grammar and operator grammar. Explain with rules and examples.", freq: "must", marks: [3,2,4] },
          { q: "Construct operator precedence parsing table for a given grammar. Discuss its disadvantages.", freq: "must", marks: [7,4,6] },
          { q: "Check whether a given grammar is LR(0) and SLR(0) / SLR(1) or not.", freq: "high", marks: [7] },
          { q: "Discuss differences between SLR, Canonical LR (CLR), and LALR parsers.", freq: "high", marks: [4] },
          { q: "Apply operator precedence parsing for an expression — show stack actions.", freq: "high", marks: [6] },
          { q: "What is shift/reduce conflict? When does it occur?", freq: "med", marks: [2] },
        ]
      },
      {
        unit: 4, title: "Unit IV", sub: "SDT · TAC · Quadruple · Triple · Postfix",
        questions: [
          { q: "Define Syntax Directed Translation (SDT). Explain S-attributed vs L-attributed SDT with differences.", freq: "must", marks: [4,6] },
          { q: "Differentiate synthesized attributes and inherited attributes in SDT with examples.", freq: "must", marks: [6,4] },
          { q: "Generate Three-Address Code (TAC) for a given expression. Also compute quadruple, triple, and indirect triple.", freq: "must", marks: [6] },
          { q: "Convert infix expression to postfix using SDT / translation scheme.", freq: "must", marks: [6] },
          { q: "Construct syntax tree and generate TAC for a given statement (e.g. A = B + C * D).", freq: "high", marks: [6] },
          { q: "Convert binary number to decimal using a given SDT (annotated parse tree).", freq: "high", marks: [6] },
          { q: "Define three-address code. Write TAC for a while/if-else statement.", freq: "high", marks: [6] },
          { q: "What is syntax directed definition? Explain with example.", freq: "high", marks: [4] },
          { q: "What is postfix notation? Define and illustrate with an expression.", freq: "med", marks: [6] },
        ]
      },
      {
        unit: 5, title: "Unit V", sub: "Runtime · Code Optimization · Data Flow",
        questions: [
          { q: "Explain activation record — structure, components, and block diagram.", freq: "must", marks: [5,2,4] },
          { q: "Explain basic blocks and flow graphs with example. How are basic block boundaries identified?", freq: "must", marks: [5,6] },
          { q: "Explain global data flow analysis and how it helps in optimizing programs.", freq: "must", marks: [5] },
          { q: "Explain storage allocation strategies (static, stack, heap).", freq: "must", marks: [5,4] },
          { q: "Explain loop optimization techniques — loop invariant computation, induction variable, strength reduction.", freq: "must", marks: [5,6] },
          { q: "Explain activation trees and activation records.", freq: "high", marks: [5] },
          { q: "Explain error control and symbol table.", freq: "high", marks: [5] },
          { q: "Find loop-invariant computation for a given code (e.g. for loop with expression).", freq: "high", marks: [5] },
          { q: "Explain peephole optimization — what it is and what transformations it performs.", freq: "med", marks: [3] },
          { q: "Explain constant folding and local optimization techniques.", freq: "med", marks: [3] },
        ]
      }
    ]
  },
  {
    id: "ml",
    label: "Machine Learning",
    theme: { primary: "#c0392b", bg: "#fdedec20" },
    units: [
      {
        unit: 1, title: "Unit I", sub: "Regression · KNN · Types of ML",
        questions: [
          { q: "What is Machine Learning? Give an example.", freq: "must", marks: [2,3] },
          { q: "Explain types of Machine Learning and its applications.", freq: "must", marks: [2,5,6] },
          { q: "What is Linear Regression? Explain with cost function, assumptions, and regression line.", freq: "must", marks: [4,5,7] },
          { q: "What is the cost function in Linear Regression? How does it help? How to reduce it?", freq: "must", marks: [3,5] },
          { q: "Explain Gradient Descent — derivation, role in Linear Regression, stopping point.", freq: "must", marks: [5,6] },
          { q: "Given dataset points, compute the best-fit line using Linear Regression.", freq: "must", marks: [5] },
          { q: "What is MSE (Mean Square Error) and how is it used in Linear Regression?", freq: "high", marks: [3] },
          { q: "What is Logistic Regression? Explain with example. Compare with Linear Regression.", freq: "must", marks: [5,6,7] },
          { q: "Write a note on types of Logistic Regression.", freq: "high", marks: [3,5] },
          { q: "In Logistic Regression, what function models probability of a binary outcome?", freq: "high", marks: [1] },
          { q: "What is K-Nearest Neighbour (KNN)? Explain with example. How does value of k affect performance?", freq: "must", marks: [5,7] },
          { q: "Write a note on Eager Learning and Lazy Learning.", freq: "med", marks: [3] },
          { q: "What is supervised learning? Give an example.", freq: "must", marks: [2,5] },
          { q: "What is unsupervised learning? Give an example.", freq: "must", marks: [2,5] },
          { q: "What is Reinforcement Learning? Give an example.", freq: "high", marks: [2,5] },
          { q: "What is Association Rule Mining? Give an example.", freq: "med", marks: [2] },
          { q: "What is an outlier?", freq: "low", marks: [2] },
          { q: "What is residual in regression?", freq: "med", marks: [2] },
          { q: "What are dependent and independent variables in regression?", freq: "med", marks: [2] },
          { q: "Explain Machine Learning lifecycle with diagram.", freq: "med", marks: [4] }
        ]
      },
      {
        unit: 2, title: "Unit II", sub: "Decision Tree · SVM · Bayes · Regularization",
        questions: [
          { q: "Explain Decision Tree working with a suitable example.", freq: "must", marks: [7,8] },
          { q: "Explain ID3 algorithm — expected information, information gain, entropy, information needed.", freq: "must", marks: [5,7,8] },
          { q: "What are advantages and disadvantages of ID3?", freq: "high", marks: [3] },
          { q: "Differentiate Classification and Regression.", freq: "must", marks: [2,5] },
          { q: "Illustrate and explain the classification task with evaluation criteria.", freq: "high", marks: [5] },
          { q: "Support Vector Machine (SVM) — working, optimization objective, kernel methods.", freq: "must", marks: [7,8] },
          { q: "Explain how kernel methods improve the performance of SVM.", freq: "must", marks: [7] },
          { q: "What is regularization? How does it help in Machine Learning? Explain its types (L1/L2).", freq: "must", marks: [3,5,8] },
          { q: "Write a note on overfitting and underfitting. Define with examples.", freq: "must", marks: [3,5] },
          { q: "Explain Naïve Bayes algorithm with example.", freq: "high", marks: [8] },
          { q: "Explain Bayesian theorem with example.", freq: "high", marks: [5] },
          { q: "What are training set and test set?", freq: "med", marks: [2] },
          { q: "Explain candidate elimination algorithm with example.", freq: "med", marks: [5] },
          { q: "Given a dataset, construct a decision tree using ID3 (compute entropy, information gain, build tree).", freq: "must", marks: [7,8] }
        ]
      },
      {
        unit: 3, title: "Unit III", sub: "Clustering · PCA · Matrix Factorization",
        questions: [
          { q: "What is clustering? Explain types with examples.", freq: "must", marks: [2,3,7] },
          { q: "Explain K-Means clustering algorithm with a step-by-step numerical example.", freq: "must", marks: [7,8] },
          { q: "What are pros and cons of K-Means?", freq: "high", marks: [3] },
          { q: "Perform K-Means clustering on a given dataset (e.g. flower petal/sepal data, height/weight) with K=2.", freq: "must", marks: [7] },
          { q: "What is Principal Component Analysis (PCA)? Define and explain its significance.", freq: "must", marks: [7,8] },
          { q: "Explain the steps involved in PCA. How are variance and covariance connected to PCA?", freq: "must", marks: [7,8] },
          { q: "What is dimensional/dimensionality reduction? Explain various approaches.", freq: "must", marks: [3,6] },
          { q: "Write differences between Linear Discriminant Analysis and PCA.", freq: "high", marks: [6] },
          { q: "Explain matrix factorization with a recommendation system example.", freq: "high", marks: [5,7] },
          { q: "Explain LU Decomposition with steps and example.", freq: "med", marks: [5] },
          { q: "What are desirable properties of a clustering algorithm?", freq: "med", marks: [3] },
          { q: "Explain the role of matrix completion in Machine Learning.", freq: "med", marks: [8] }
        ]
      },
      {
        unit: 4, title: "Unit IV", sub: "Neural Networks · Perceptron · Backprop",
        questions: [
          { q: "Define a perceptron. Explain its working with an example.", freq: "must", marks: [4,5] },
          { q: "Write a note on Artificial Neural Network — architecture, properties, layers, nodes, activation functions.", freq: "must", marks: [4,5] },
          { q: "What are different network topologies in ANN (feedforward, recurrent)?", freq: "must", marks: [4] },
          { q: "What is a Recurrent Neural Network (RNN)? How does it differ from a feedforward network?", freq: "must", marks: [6] },
          { q: "Explain concepts of backpropagation — chain rule, forward phase, backward phase, with example.", freq: "must", marks: [6,7] },
          { q: "What is Multi-Layer Feedforward Network? Explain architecture and algorithm.", freq: "high", marks: [4,6] },
          { q: "Describe Python ML libraries: Keras and TensorFlow — key features and relationships.", freq: "high", marks: [6] },
          { q: "Write various types of data visualization in Machine Learning.", freq: "med", marks: [2] },
          { q: "Explain matplotlib figure with description of all its components.", freq: "med", marks: [6] },
          { q: "Explain various visualization types available for data visualization.", freq: "med", marks: [6] },
          { q: "Write applications of data visualization in the real world.", freq: "med", marks: [4] }
        ]
      },
      {
        unit: 5, title: "Unit V", sub: "Ensemble · Deep Learning · RL · Association Rules",
        questions: [
          { q: "Explain Random Forest — working principle, why it is used in Machine Learning.", freq: "must", marks: [4,5] },
          { q: "Explain Bagging with example. What are its advantages in improving model performance?", freq: "must", marks: [5] },
          { q: "Explain Boosting (AdaBoost) algorithm with example.", freq: "must", marks: [5] },
          { q: "Differentiate Bagging vs Boosting vs Stacking.", freq: "must", marks: [5] },
          { q: "What are advantages and disadvantages of ensemble methods?", freq: "must", marks: [5] },
          { q: "Write a note on Deep Learning. How does it differ from Machine Learning?", freq: "must", marks: [5] },
          { q: "Describe key components of a Reinforcement Learning system and how they interact.", freq: "high", marks: [5] },
          { q: "Write a note on Semi-Supervised Learning — real-world example and challenges.", freq: "high", marks: [5] },
          { q: "How is ML used in text analysis and sentiment analysis?", freq: "high", marks: [6] },
          { q: "What is Support Vector Machine? Explain with suitable example. (Unit V variant)", freq: "high", marks: [6] },
          { q: "What are association rules? Explain minimum support, minimum confidence, frequent itemset.", freq: "med", marks: [3,5] },
          { q: "Why is association rule mining a complex task?", freq: "med", marks: [3] },
          { q: "Explain advanced ensemble techniques / stacking with example.", freq: "med", marks: [5] }
        ]
      }
    ]
  },
  {
    id: "xml",
    label: "Programming with XML",
    theme: { primary: "#D85A30", bg: "#FAECE720" },
    units: [
      {
        unit: 1, title: "Unit 1", sub: "XML Basics",
        questions: [
          { q: "Define XML / What is XML? Explain its features / benefits / basic rules for writing an XML document.", freq: "must", marks: [2,5] },
          { q: "Differentiate between XML and HTML (purpose, syntax, data handling — at least 3 differences).", freq: "must", marks: [3,5] },
          { q: "Explain elements and attributes in XML with examples (including empty elements).", freq: "must", marks: [3,5] },
          { q: "How to validate an XML document? Explain XML validation with a suitable example (DTD + Schema techniques).", freq: "must", marks: [5] },
          { q: "Create / write an XML document structure for a Notebook (with notes, attributes for date and priority).", freq: "high", marks: [5] },
          { q: "Explain XML Tools and XML Validation with example.", freq: "high", marks: [5] }
        ]
      },
      {
        unit: 2, title: "Unit 2", sub: "DTD (Document Type Definition)",
        questions: [
          { q: "What is DTD? Explain its advantages and disadvantages.", freq: "must", marks: [5,8] },
          { q: "Explain internal and external DTDs and write differences between them (at least four).", freq: "must", marks: [8] },
          { q: "Define all four DTD concepts with examples: (a) Element with children (b) Empty elements (c) Number of occurrences (d) Defining choices.", freq: "must", marks: [8] },
          { q: "Write a DTD snippet / external DTD for a Notebook XML. Explain how to link DTD to an XML file.", freq: "high", marks: [5,8] },
          { q: "What do you mean by empty elements and number of occurrences in DTD? (short answer)", freq: "low", marks: [2] }
        ]
      },
      {
        unit: 3, title: "Unit 3", sub: "XML Schema (XSD)",
        questions: [
          { q: "Explain simple and complex data types in XML Schema with examples.", freq: "must", marks: [3,8] },
          { q: "How to link and validate XML with a Schema (XSD)? Explain with example.", freq: "must", marks: [7] },
          { q: "Write an XML Schema (XSD) for a Notebook structure with &lt;note&gt; containing &lt;title&gt;, &lt;content&gt;, and a date attribute.", freq: "must", marks: [5,7] },
          { q: "Explain attributes in XML and restrictions on values with examples.", freq: "high", marks: [7] },
          { q: "Analyze the advantages of using XML Schema over DTD and explain a scenario where Schema is preferable.", freq: "high", marks: [5] },
          { q: "What is an XML Namespace? Why is it important?", freq: "low", marks: [2] }
        ]
      },
      {
        unit: 4, title: "Unit 4", sub: "XSL / XSLT",
        questions: [
          { q: "Define xsl:output, xsl:template, and xsl:apply-templates with examples.", freq: "must", marks: [6] },
          { q: "How to transform an XML file into HTML using XSL transformation (XSLT)? Explain with example.", freq: "must", marks: [6,7] },
          { q: "Create a XSLT for a Notebook XML and generate output in different conditions (with xsl:if / xsl:for-each).", freq: "must", marks: [6] },
          { q: "What is XSL? Explain layout and templates for XSL. Describe linking XSL to an XML source with example.", freq: "high", marks: [4] },
          { q: "How does &lt;xsl:for-each&gt; loop work in XSLT? Give an example that loops over a list of nodes.", freq: "high", marks: [5] },
          { q: "How does &lt;xsl:if&gt; work in XSLT? Write an example where it is used to display elements based on a condition.", freq: "high", marks: [5] },
          { q: "What is the identity template in XSL? Why do you use it? Explain with example.", freq: "low", marks: [7] },
          { q: "Analyze the structure of an XSL document and explain how templates achieve separation of content and presentation.", freq: "low", marks: [5] }
        ]
      },
      {
        unit: 5, title: "Unit 5", sub: "XPath",
        questions: [
          { q: "What is XPath? Explain how XPath is used to navigate an XML document (with location paths, axes, examples).", freq: "must", marks: [4,6] },
          { q: "Explain different types of operators in XPath with examples (comparison, boolean, string — any five).", freq: "must", marks: [6] },
          { q: "What are predicates in XPath? Explain their uses and different conditions for using predicates.", freq: "must", marks: [5] },
          { q: "Enlist the types of nodes in XPath. How to define relationships among nodes?", freq: "high", marks: [6] },
          { q: "What are the main features of XPath? (list at least 5)", freq: "high", marks: [5] },
          { q: "Compare ancestor:: and preceding-sibling:: axes in XPath with examples.", freq: "low", marks: [5] },
          { q: "Create an XML file for student information. Apply validation, schema, and XSLT for it and display in browser.", freq: "low", marks: [5] }
        ]
      }
    ]
  },
  {
    id: "rm",
    label: "Research Methodology",
    theme: { primary: "#BA7517", bg: "#FAEEDA20" },
    units: [
      {
        unit: 1, title: "Unit 1", sub: "Research Fundamentals & Process",
        questions: [
          { q: "Explain the research process in detail (with diagram / feed-forward & feedback).", freq: "must", marks: [5,7] },
          { q: "Differentiate between Research Method and Research Methodology with examples.", freq: "must", marks: [3,6] },
          { q: "Explain the key differences between Fundamental (Basic) and Applied Research with suitable examples.", freq: "must", marks: [2,5] },
          { q: "Illustrate the characteristics of good research and explain how they contribute to reliable results.", freq: "must", marks: [5] },
          { q: "Research is much concerned with proper fact finding, analysis, and evaluation. Do you agree? Give reasons.", freq: "high", marks: [2,3] },
          { q: "Enlist the objectives / significance of research. What is the significance of research in modern society?", freq: "high", marks: [2,4] },
          { q: "Explain Descriptive research with a suitable example.", freq: "low", marks: [5] }
        ]
      },
      {
        unit: 2, title: "Unit 2", sub: "Literature Review & Research Problem",
        questions: [
          { q: "Write the importance of a literature review in defining a problem. How is it helpful for identifying gap areas?", freq: "must", marks: [8] },
          { q: "Discuss the steps involved in defining and formulating a research problem. How does properly defining it contribute to a study's success?", freq: "must", marks: [6,8] },
          { q: "What is a critical literature review, and how is it helpful for identifying gap areas in existing research?", freq: "must", marks: [2,6] },
          { q: "Explain primary and secondary sources of data collection (in the context of literature review).", freq: "must", marks: [2,6] },
          { q: "Discuss how critically analyzing primary and secondary sources contributes to developing a well-defined research problem.", freq: "high", marks: [6] },
          { q: "What are the criteria for identifying / selecting a research problem? What are the various sources to identify it?", freq: "high", marks: [8] },
          { q: "What is a gap analysis in research? Explain with suitable examples.", freq: "low", marks: [2] }
        ]
      },
      {
        unit: 3, title: "Unit 3", sub: "Research Ethics & Integrity",
        questions: [
          { q: "Elaborate scientific misconducts in terms of FFP (Falsification, Fabrication, and Plagiarism) with examples.", freq: "must", marks: [7] },
          { q: "Explain the concept of plagiarism, intellectual honesty, and research integrity.", freq: "must", marks: [6,8] },
          { q: "What are duplicate, overlapping, and redundant publications, and why are they considered research misconduct?", freq: "high", marks: [7] },
          { q: "Critically analyze the ethical concerns surrounding automated plagiarism detection tools (e.g., Turnitin), including false positives and data privacy.", freq: "high", marks: [5] },
          { q: "Write a short note on the nature of moral judgments and reactions. Differentiate descriptive vs. prescriptive moral judgment.", freq: "low", marks: [2,3] },
          { q: "Explain the importance of maintaining intellectual honesty and ethical responsibility in scientific publication / publication ethics.", freq: "low", marks: [6] }
        ]
      },
      {
        unit: 4, title: "Unit 4", sub: "Data Collection, Processing & Hypothesis Testing",
        questions: [
          { q: "Describe the main steps involved in data processing and analysis (Editing, Coding, Classification, Tabulation).", freq: "must", marks: [4,6] },
          { q: "Discuss the significance of the null hypothesis in statistical testing. Explain Type I and Type II errors with examples.", freq: "must", marks: [5,6] },
          { q: "Explain the process of hypothesis testing in detail (with flow diagram).", freq: "high", marks: [5,6] },
          { q: "Describe the process of data collection, processing, and analysis with suitable examples.", freq: "high", marks: [6] },
          { q: "Explain the concept of p-value in statistical hypothesis testing and common thresholds to interpret it.", freq: "low", marks: [6] },
          { q: "A researcher claims average social media time > 3 hrs. Sample mean = 3.5 hrs, SD = 1.2, n = 50, α = 0.05. Test the hypothesis.", freq: "low", marks: [4] }
        ]
      },
      {
        unit: 5, title: "Unit 5", sub: "Databases, Referencing & Report Writing",
        questions: [
          { q: "Analyze the differences between citation databases Web of Science (WoS) and Scopus in terms of coverage and indexing.", freq: "must", marks: [4,5] },
          { q: "Explain the use of reference management tools like Zotero / Mendeley / EndNote (integration with word processors, bibliography generation).", freq: "must", marks: [5] },
          { q: "Explain the importance of proper referencing, footnotes, and bibliography in research documentation.", freq: "high", marks: [5,6] },
          { q: "What are the key sections of a research report and what purpose does each section serve?", freq: "high", marks: [5] },
          { q: "Explain formulation rules for writing a research report.", freq: "low", marks: [5] },
          { q: "Discuss various types of research metrics and their significance in academic performance measurement.", freq: "low", marks: [6] }
        ]
      }
    ]
  }
];

const freqData = {
  must: { label: "★ Must", color: "#993C1D", bg: "#FAECE7", tooltip: "5–6 papers" },
  high: { label: "↑ High", color: "#0F6E56", bg: "#E1F5EE", tooltip: "3–4 papers" },
  med:  { label: "~ Med", color: "#185FA5", bg: "#E6F1FB", tooltip: "2 papers" },
  low:  { label: "Low", color: "#5F5E5A", bg: "#F1EFE8", tooltip: "1 paper" }
};
