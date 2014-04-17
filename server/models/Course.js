var mongoose = require('mongoose');

var coursesSchema = mongoose.Schema({
    title: String,
    featured: Boolean,
    published: Date,
    tags: [String]
});

var Course = mongoose.model('Course', coursesSchema);

module.exports.seedInitialCourses = function() {
    Course.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find courses: ' + err);
            return;
        }

        if (collection.length === 0) {
            Course.create({title: 'C# for Sociopaths', featured: true, published: new Date('10/5/2013'), tags: ['C#']});
            Course.create({title: 'C# for Non-Sociopaths', featured: true, published: new Date('10/12/2013'), tags: ['C#']});
            Course.create({title: 'Super Duper Expert C#', featured: false, published: new Date('10/1/2013'), tags: ['C#']});
            Course.create({title: 'Visual Basic for Visual Basic Developers', featured: false, published: new Date('7/12/2013'), tags: ['VB']});
            Course.create({title: 'Pedantic C++', featured: true, published: new Date('1/1/2013'), tags: ['C++']});
            Course.create({title: 'JavaScript for People over 20', featured: true, published: new Date('10/13/2013'), tags: ['JS']});
            Course.create({title: 'Maintainable Code for Cowards', featured: true, published: new Date('3/1/2013'), tags: ['Coding']});
            Course.create({title: 'A Survival Guide to Code Reviews', featured: true, published: new Date('2/1/2013'), tags: ['Coding']});
            Course.create({title: 'How to Job Hunt Without Alerting your Boss', featured: true, published: new Date('10/7/2013'), tags: ['Misc']});
            Course.create({title: 'How to Keep your Soul and go into Management', featured: false, published: new Date('8/1/2013'), tags: ['Management']});
            Course.create({title: 'Telling Recruiters to Leave You Alone', featured: false, published: new Date('11/1/2013'), tags: ['Misc']});
            Course.create({title: "Writing Code that Doesn't Suck", featured: true, published: new Date('10/13/2013'), tags: ['Coding']});
            Course.create({title: 'Code Reviews for Jerks', featured: false, published: new Date('10/1/2013'), tags: ['Coding']});
            Course.create({title: 'How to Deal with Narcissistic Coworkers', featured: true, published: new Date('2/15/2013'), tags: ['Misc']});
            Course.create({title: 'Death March Coding for Fun and Profit', featured: true, published: new Date('7/1/2013'), tags: ['Coding', 'Misc']});
        }
    });
};
