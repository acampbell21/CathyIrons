class Api::ImagesController < ApplicationController
  include CloudinaryConcern

  def add_user_image
    begin
      url = upload_file(params)['url']
      current_user.update(image: url)
      render json: url
    rescue => e
      unprocessable([e])     
    end
  end

  def add_user_resume
    begin
      url = upload_file(params)['url']
      current_user.update(resume: url)
      render json: url
    rescue => e
      unprocessable([e])
    end
  end
end
