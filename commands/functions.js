module.exports = function() {
    this.GetUserFromMention = function(input, client) {
        if (input.startsWith('<@') && input.endsWith('>')) {
            input = input.slice(2, -1);
    
            if (input.startsWith('!'))
                input = input.slice(1);
        }
    
        return client.users.cache.get(input);
    };

};