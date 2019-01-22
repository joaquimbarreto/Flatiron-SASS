class PresencesController < ApplicationController

    def index
        @presences = Presence.all
        render json: @presences
      end
    
      def show
        @presence = Presence.find(params[:id])
        render json: @presence
      end
    
      def new
      end
    
      def create
      end
    
      def edit
      end
    
      def update
      end
    
      def destroy
      end
    
      private
    
      def presences_params
        
      end

end
