/**
 * Finds out what team got the most points by analyzing list of competitions and results.
 *
 * @param {Array.<[string, string]>} competitions array
 *      List of competitions contains list of two competitors (home and away team).
 * @param {Array.<0 | 1>} results array
 *      List of results is list s of ones and zeros, which has equal length to competitions list.
 *      Every 0 - means that away team won the match and 1 - means the opposite.
 *
 * 0(n) time | O(k) space.
 *      n - size of `competitions`.
 *      k - `scores` size. (almost equals to `n`)
 *
 * @returns {string} - name of the winner.
 */
export function tournamentWinner(competitions, results) {
    const scores = {
        currentBestTeam: null
    };

    for (const [index, value] of competitions.entries()) {
        const winner = value[results[index] === 0 ? 1 : 0];
        const { currentBestTeam } = scores;

        if (winner in scores) {
            scores[winner] = scores[winner] += 3;
        } else {
            scores[winner] = 3;
        }

        // Saves and updates last best team in order to avoid second loop.
        if (!scores[currentBestTeam] || scores[winner] > scores[currentBestTeam]) {
            scores.currentBestTeam = winner;
        }
    }

    return scores.currentBestTeam;
}

