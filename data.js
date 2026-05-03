const subjectsData = [
  {
    id: "daa",
    label: "Design & Analysis of Algorithms",
    theme: { primary: "#D85A30", bg: "#FAECE720" },
    units: [
      {
        unit: 1, title: "Unit I", sub: "Complexity · Asymptotic Notations · Recurrences · Sorting",
        questions: [
          { q: "Explain asymptotic notations — Big-O, Big-Ω, Big-Θ. What is the upper/lower bound of f(n)?", freq: "must", marks: [4,6] },
          { q: "Solve recurrence relations using Master's Theorem (e.g. T(n)=2T(n/2)+n², T(n)=3T(n/3)+√n, T(n)=4T(n/2)+logn).", freq: "must", marks: [6] },
          { q: "Explain space and time complexity of algorithms.", freq: "must", marks: [4,6] },
          { q: "Sort elements using Selection Sort. Write best, worst, average case complexity.", freq: "must", marks: [6] },
          { q: "Write algorithm for Bubble Sort and analyse its time complexity (best and worst case).", freq: "must", marks: [4,6] },
          { q: "Sort elements using Heap Sort (Max Heap) — step-by-step with given data.", freq: "must", marks: [7] },
          { q: "Sort elements using Quick Sort and Merge Sort. Analyse their complexities. Justify Quick Sort's O(n²) worst case.", freq: "must", marks: [8,4] },
          { q: "Explain Strassen's Matrix Multiplication — how it improves on simple multiplication, complexity analysis.", freq: "must", marks: [6,7,8] },
          { q: "Write recursive binary search algorithm. Analyse its complexity.", freq: "high", marks: [6] },
          { q: "Explain max heap and min heap with example.", freq: "high", marks: [4] },
          { q: "What is the significance of Divide and Conquer strategy? Explain with examples.", freq: "high", marks: [2,4] },
          { q: "Explain Bucket Sort vs Radix Sort — implementation, efficiency, worst case scenario.", freq: "med", marks: [6] },
        ]
      },
      {
        unit: 2, title: "Unit II", sub: "Greedy · Knapsack · MST · Huffman · Job Sequencing",
        questions: [
          { q: "Solve the Fractional Knapsack problem using Greedy strategy — find maximum profit (given weights and values).", freq: "must", marks: [6,7] },
          { q: "Differentiate Prim's and Kruskal's algorithms for finding Minimum Spanning Tree (MST). Apply to a graph.", freq: "must", marks: [3,4] },
          { q: "Write a note on Minimum Spanning Tree.", freq: "must", marks: [3] },
          { q: "Construct Huffman tree for given characters and frequencies. Determine Huffman codes. Calculate total bits.", freq: "must", marks: [7] },
          { q: "Solve Job Sequencing with Deadlines — find maximum profit sequence using Greedy approach.", freq: "must", marks: [6,7] },
          { q: "Find Optimal Merge Pattern for given file lengths (using min-heap).", freq: "high", marks: [4] },
          { q: "Apply Dijkstra's Algorithm — find shortest path from source to all vertices, show order of selected nodes.", freq: "high", marks: [6] },
          { q: "Define Greedy strategy. Differentiate between Optimal and Feasible solution.", freq: "high", marks: [3,4] },
        ]
      },
      {
        unit: 3, title: "Unit III", sub: "Dynamic Programming · LCS · 0/1 Knapsack · Multistage",
        questions: [
          { q: "What is Dynamic Programming? Explain principle of optimality. Differentiate from Greedy method.", freq: "must", marks: [4] },
          { q: "Solve 0/1 Knapsack problem using Dynamic Programming — DP table, optimal selection.", freq: "must", marks: [6,7] },
          { q: "Find Longest Common Subsequence (LCS) of two given strings using DP.", freq: "must", marks: [6] },
          { q: "Find shortest path in a Multistage Graph from S to T using forward/backward approach.", freq: "must", marks: [6] },
          { q: "Explain reliability design — three stage systems with device type, cost, reliability constraints.", freq: "high", marks: [6] },
          { q: "Using Floyd's Algorithm, find all-pair shortest path for a given graph.", freq: "high", marks: [6] },
          { q: "What are benefits of Dynamic Programming? Properties: optimal substructure & overlapping subproblems.", freq: "high", marks: [4] },
        ]
      },
      {
        unit: 4, title: "Unit IV", sub: "Backtracking · Branch & Bound · N-Queens · Graph Coloring",
        questions: [
          { q: "Explain N-Queens problem — backtracking approach with example.", freq: "must", marks: [5] },
          { q: "Explain Graph Coloring using Backtracking with example.", freq: "must", marks: [5] },
          { q: "Differentiate Backtracking and Branch & Bound approaches with suitable examples.", freq: "must", marks: [5] },
          { q: "Explain Sum of Subset problem using Backtracking approach.", freq: "high", marks: [5] },
          { q: "Solve TSP (Travelling Salesman Problem) using Branch and Bound / reduction method.", freq: "high", marks: [5] },
          { q: "Solve 0/1 Knapsack using FIFO Branch and Bound.", freq: "med", marks: [6] },
          { q: "What is Hamiltonian cycle? Define with example.", freq: "med", marks: [5] },
        ]
      },
      {
        unit: 5, title: "Unit V", sub: "P, NP, NP-Complete · NP-Hard",
        questions: [
          { q: "Explain P, NP, NP-Complete, and NP-Hard problems with suitable examples.", freq: "must", marks: [5] },
          { q: "What is NP-Hard and NP-Completeness? Explain with example.", freq: "must", marks: [5] },
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
        unit: 1, title: "Unit I", sub: "Agile basics · Agile Manifesto · Agile vs Waterfall",
        questions: [
          { q: "What are agile methods? What are the principles behind the Agile Manifesto?", freq: "must", marks: [6] },
          { q: "What are the important parts of an agile process?", freq: "must", marks: [4] },
          { q: "Differentiate between the Agile software development model and the Waterfall model.", freq: "must", marks: [6] },
          { q: "What is the working principle of Agile? What value is provided by Agile? Discuss.", freq: "must", marks: [7] },
          { q: "Agile software development is based on incremental and iterative development — explain.", freq: "high", marks: [3] },
          { q: "When should we not use Agile? Write major challenges with agile project management.", freq: "high", marks: [5] },
        ]
      },
      {
        unit: 2, title: "Unit II", sub: "Scrum · Sprints · Product Backlog · Roles",
        questions: [
          { q: "How many phases are there in Scrum? Explain Scrum framework — phases, events, roles.", freq: "must", marks: [3,7] },
          { q: "What is the purpose of sprint retrospective in Scrum? Also explain sprint planning.", freq: "must", marks: [7] },
          { q: "How do you write a product vision in Scrum?", freq: "must", marks: [3] },
          { q: "What are essential qualities to have as a Scrum Master?", freq: "high", marks: [5] },
          { q: "What are various advanced Scrum applications? Explain each.", freq: "high", marks: [5] },
          { q: "Product backlog should be ordered on the basis of value — explain.", freq: "med", marks: [3] },
          { q: "In Scrum, when is a Sprint Over? (when time box expires)", freq: "med", marks: [1] },
        ]
      },
      {
        unit: 3, title: "Unit III", sub: "XP · Lean · Roles in Agile",
        questions: [
          { q: "What is meant by Lean approach? How does it work?", freq: "must", marks: [5] },
          { q: "Explain various roles in the agile process. How are these roles different from traditional roles?", freq: "must", marks: [5] },
          { q: "Explain Extreme Programming (XP) — four framework activities: planning, design, coding, testing.", freq: "high", marks: [3,5] },
          { q: "Which of the following is not an agile method? (XP, 4GT, AUP) — explain agile methods.", freq: "med", marks: [3] },
        ]
      },
      {
        unit: 4, title: "Unit IV", sub: "Agile Metrics · Risk Management · Project Management Tools",
        questions: [
          { q: "What are the most critical agile metrics? List and explain at least 4.", freq: "must", marks: [4] },
          { q: "List agile project management tools and their roles in project planning.", freq: "must", marks: [6] },
          { q: "Explain risk management in agile — risk identification, monitoring, mitigation.", freq: "must", marks: [6] },
          { q: "Explain tools used for agile project management.", freq: "high", marks: [5] },
          { q: "Which process is concerned with analysing costs and benefits of proposed changes? (Change management)", freq: "med", marks: [1] },
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
