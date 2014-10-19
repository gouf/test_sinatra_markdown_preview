require 'sinatra'
require 'sinatra/json'
require 'slim'

class MyApp < Sinatra::Base
  helpers Sinatra::JSON
end
