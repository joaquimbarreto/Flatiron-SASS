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
        @presence = Presence.new(present: params[:present], late: params[:late], date: params[:date], student_id: params[:student_id])
        if @presence.save
          render json: @presence
        else
          render json: {error: "Unable to create presence."}, status: 400
        end
      end

      def edit
      end

      def update
      end


      private

      def presences_params

      end

end
