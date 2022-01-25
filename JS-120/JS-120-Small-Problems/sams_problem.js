/** 
 * Use each of the below patterns to create instance objects
 * which satisfy the following tests below each...
*/

/**======================== Factory Function ================================
 * ==========================================================================
 * (Write answers to all questions and demonstrate using instance properties)
 * 
 * Show the prototype chain for instances created with this pattern.
 *
 *
 * Does this pattern conserve memory?
 *
 * 
 * What relationships (to other objects) can we determine from the instance?
 *  
 */

console.log(player1.name === 'Dennis');
console.log(player1.position === 'Forward');
console.log(player1.info() === 'Dennis is a Forward in the NBA');

/**=============== Objects-Linking to Other Objects (OLOO) ==================
 * ==========================================================================
 * (Write answers to all questions and demonstrate using instance properties)
 * 
 * Show the prototype chain for instances created with this pattern.
 *
 *
 * Does this pattern conserve memory?
 *
 * What relationships (to other objects) can we determine from the instance?
 *  
 */

console.log(player2.name === 'Dennis');
console.log(player2.position === 'Forward');
console.log(player2.info() === 'Dennis is a Forward in the NBA');

/**====================== Constructor (JS225) ===============================
 * ==========================================================================
 * (Write answers to all questions and demonstrate using instance properties)
 * 
 * Show the prototype chain for instances created with this pattern.
 *
 *
 * Does this pattern conserve memory?
 *
 * What relationships (to other objects) can we determine from the instance?
 *  
 */

console.log(player3.name === 'Dennis');
console.log(player3.position === 'Forward');
console.log(player3.info() === 'Dennis is a Forward in the NBA');

/**============= Constructor & Prototype (Pseudo-Classical) =================
 * ==========================================================================
 * (Write answers to all questions and demonstrate using instance properties)
 * 
 * Show the prototype chain for instances created with this pattern.
 *
 *
 * Does this pattern conserve memory?
 *
 * What relationships (to other objects) can we determine from the instance?
 *  
 */

console.log(player4.name === 'Dennis');
console.log(player4.position === 'Forward');
console.log(player4.info() === 'Dennis is a Forward in the NBA');

/**==================== ES6 Class (Pseudo-Classical) ========================
 * ==========================================================================
 * (Write answers to all questions and demonstrate using instance properties)
 * 
 * Show the prototype chain for instances created with this pattern.
 *
 *
 * Does this pattern conserve memory?
 *
 * What relationships (to other objects) can we determine from the instance?
 *  
 */

console.log(player5.name === 'Dennis');
console.log(player5.position === 'Forward');
console.log(player5.info() === 'Dennis is a Forward in the NBA');