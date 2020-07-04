export const stringManipulationMixin = {
    data () {
        return {
            text: 'Test',
        };
    },
    computed: {
        reversed () {
            return this.text.split("").reverse().join("");
        },
        withCounted () {
            return `${this.text} (${this.text.length})`;
        }
    },
};