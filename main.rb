require 'sinatra'
require 'sinatra/json'
require 'slim'

class MyApp < Sinatra::Base
  helpers Sinatra::JSON

  def initialize
    @markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
    super
  end

  get '/' do
    slim :index
  end
  post '/parse/?' do
    json(@markdown.render(params[:text]))
  end
end
