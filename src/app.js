let vm1 = new Vue({
    el: '#app', // Provide the Vue instance an existing DOM element to mount on
    /*
     * The data object for the Vue instance. Vue will recursively convert its properties into getter/setters to make it “reactive”.
     */
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
            signUpText: "Add your name to the guest list for <em>exclusive</em> offers:"
        },
        newNameText: '',
        guestName: [],
        eventCapacity: 25,
        eventCapacityPercentage: 0,
    },
    /*
     * Methods to be mixed into the Vue instance. You can access these methods directly on the VM instance, or use them in directive expressions.
     * All methods will have their this context automatically bound to the Vue instance.
     * Methods always re-render when anything changes, even if there is no change to the data that it displays.
     */
    methods: {
        formSubmitted: function () {
            if (this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
                this.guestName.push(this.newNameText);
                this.newNameText = ''; // clear the value that was entered in the text box after adding to the array
                this.eventCapacityPercentage = (this.guestName.length / this.eventCapacity) * 100; // calculate the event capacity percentage for progress bar
            }
        },
        keyPressed: function() {
            console.log('key pressed');
        }
    },
    /*
     * Computed properties to be mixed into the Vue instance. All getters and setters have their this context automatically bound to the Vue instance.
     * Computed properties are cached, and only re-computed on reactive dependency changes.
     */
    computed: {
        sortNames: function () {
            return this.guestName.sort();
        }
    },
    /*
     * An object where keys are expressions to watch and values are the corresponding callbacks. The value can also be a string of a method name,
     * or an Object that contains additional options. The Vue instance will call $watch() for each entry in the object at instantiation.
     */
    watch: {
        guestName: function(data) {
            console.log('Watch triggered...');
        }
    },
    filters: {
        toUpper: function (value) {
            return value.toUpperCase();
        },
        formatName: function (value) {
            return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();
        }
    },
    /*
     * Demonstrating Vue.js lifecycle hooks so that they can be viewed while the app is running
     */
    beforeCreate: function () {
        console.log('beforeCreate');
    },
    created: function () {
        console.log('created');
    },
    beforeMount: function () {
        console.log('beforeMount');
    },
    mounted: function () {
        console.log('mounted');
    },
    beforeUpdate: function () {
        console.log('beforeUpdate');
    },
    updated: function () {
        console.log('updated');
    },
    beforeDestroy: function () {
        console.log('beforeDestroy');
    },
    destroyed: function () {
        console.log('destroyed');
    }
});

let vm2 = new Vue({
    el: '#navigation', // Provide the Vue instance an existing DOM element to mount on
    /*
     * The data object for the Vue instance. Vue will recursively convert its properties into getter/setters to make it “reactive”.
     */
    data: {
        appName: 'Guest List',
        navLinks: [
            {name: "Home", id: 1, url: "https://www.google.com"},
            {name: "Upcoming Events", id: 2, url: "https://www.amazon.com"},
            {name: "Guest Benefits", id: 3, url: "https://www.ebay.com"},
            {name: "Latest News", id: 4, url: "https://www.facebook.com"}
        ]
    },
    /*
     * Methods to be mixed into the Vue instance. You can access these methods directly on the VM instance, or use them in directive expressions.
     * All methods will have their this context automatically bound to the Vue instance.
     * Methods always re-render when anything changes, even if there is no change to the data that it displays.
     */
    methods: {
        /*
         * changedTitle function demonstrates how vanilla JavaScript can be used and combined with Vue properties. Here we
         * are using the Vue $ref property along with the innerText JavaScript property
         */
        changedTitle: function () {
            this.$refs.name.innerText = 'Title changed'; // refs are not reactive, and could be overwritten by Vue.js when there is a re-render
            console.log(this.$refs);
        }
    }
})