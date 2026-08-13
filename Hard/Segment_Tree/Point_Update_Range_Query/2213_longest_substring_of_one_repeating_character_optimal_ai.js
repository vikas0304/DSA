/**
 * Problem: 2213 - Longest Substring of One Repeating Character
 * Difficulty: Hard
 * Pattern: Segment Tree
 * Subpattern: Point Update & Range Merge
 * Time Complexity: O(K log N)
 * Space Complexity: O(N)
 */

class SegmentTreeNode {
    constructor(char = '') {
        this.len = char ? 1 : 0;
        this.prefChar = char;
        this.prefLen = char ? 1 : 0;
        this.suffChar = char;
        this.suffLen = char ? 1 : 0;
        this.maxLen = char ? 1 : 0;
    }
}

var longestRepeating = function(s, queryCharacters, queryIndices) {
    const n = s.length;
    const tree = new Array(4 * n);

    // Merge two child nodes into a parent
    function merge(L, R) {
        let res = new SegmentTreeNode();
        res.len = L.len + R.len;
        res.prefChar = L.prefChar;
        res.suffChar = R.suffChar;

        res.prefLen = (L.prefLen === L.len && L.prefChar === R.prefChar) 
            ? L.len + R.prefLen 
            : L.prefLen;

        res.suffLen = (R.suffLen === R.len && R.suffChar === L.suffChar) 
            ? R.len + L.suffLen 
            : R.suffLen;

        res.maxLen = Math.max(L.maxLen, R.maxLen);

        if (L.suffChar === R.prefChar) {
            res.maxLen = Math.max(res.maxLen, L.suffLen + R.prefLen);
        }

        return res;
    }

    // Build initial tree in O(N)
    function build(node, start, end) {
        if (start === end) {
            tree[node] = new SegmentTreeNode(s[start]);
            return;
        }
        const mid = Math.floor((start + end) / 2);
        build(2 * node, start, mid);
        build(2 * node + 1, mid + 1, end);
        tree[node] = merge(tree[2 * node], tree[2 * node + 1]);
    }

    // Point update character in O(log N)
    function update(node, start, end, idx, char) {
        if (start === end) {
            tree[node] = new SegmentTreeNode(char);
            return;
        }
        const mid = Math.floor((start + end) / 2);
        if (idx <= mid) {
            update(2 * node, start, mid, idx, char);
        } else {
            update(2 * node + 1, mid + 1, end, idx, char);
        }
        tree[node] = merge(tree[2 * node], tree[2 * node + 1]);
    }

    // 1. Build tree initially
    build(1, 0, n - 1);

    const result = [];

    // 2. Process each query in O(log N)
    for (let k = 0; k < queryIndices.length; k++) {
        update(1, 0, n - 1, queryIndices[k], queryCharacters[k]);
        // The root node (tree[1]) always holds the global max for the entire string!
        result.push(tree[1].maxLen);
    }

    return result;
};

// Test
const s = "abyzz";
const queryCharacters = "aa";
const queryIndices = [2, 1];

console.log(longestRepeating(s, queryCharacters, queryIndices)); 
// Output: [2, 3]