new Vue({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
            signUpText: "Add your name to the guest list for <em>exclusive</em> offers:"
        },
        newNameText: '',
        guestName: ['Ricky', 'Julian', 'Bubbles'],
        appStyles: {
            marginTop: '25px',
        },
        eventCapacity: 25,
        eventCapacityPercentage: 0
    },
    methods: {
        formSubmitted: function() {
            if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
                this.guestName.push(this.newNameText);
                this.newNameText = ''; // clear the value that was entered in the text box after adding to the array
                this.eventCapacityPercentage = (this.guestName.length / this.eventCapacity) * 100; // calculate the event capacity percentage for progress bar
            }
        }
    }
});