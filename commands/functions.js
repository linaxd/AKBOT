module.exports = function() {
    this.GetUserFromMention = function(input, client) {
        if (input.startsWith('<@') && input.endsWith('>')) {
            input = input.slice(2, -1);
    
            if (input.startsWith('!'))
                input = input.slice(1);
        }
    
        return client.users.cache.get(input);
    };

    this.joinTogetherWords = function (args, start_pos, end_pos) { 
        i = start_pos;
        first_word = true;
        return_string = '';

        while (i < args.length) {
            if (first_word)
                first_word = false;
            else return_string += ' ';

            return_string += args[i];
            ++i;    
        }

        return return_string;
    };

};